module.exports = ({types}) => {
    return {
        visitor: {
            ImportDeclaration(path, {opts,file}) {
                const pathValue = path.node.source.value;
                if (!file.opts.filename?.includes(opts.exclude) && opts.ignore.every(v => v != pathValue)) {
                    for (const {key,value } of opts.importReplace) {
                        if (pathValue.includes(key)) {
                            path.replaceWith(
                                types.ImportDeclaration(
                                    path.node.specifiers,
                                    types.stringLiteral(pathValue.replace(key, value))
                                )
                            );
                            break;
                        }
                    }
                }
            }
        },
    }
}