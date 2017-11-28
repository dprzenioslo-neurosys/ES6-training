var tree = {
    value: 27,
    left: {
        value: 14,
        left: {
            value: 10,
            left: {
                value: 7,
                left: {
                    value: 5,
                    left: null,
                    right: null
                },
                right: null,
            },
            right: {
                value: 11,
                left: null,
                right: null,
            }

        },
        right: {
            value: 19,
            left: null,
            right: null,
        }
    },
    right: {
        value: 58,
        left: null,
        right: {
            value: 75,
            left: {
                value: 70,
                left: null,
                right: null
            },
            right: {
                value: 76,
                left: null,
                right: null
            }
        }
    }
};

var treeIterable = {
    tree,
    *[Symbol.iterator](current = this.tree) {
        if (current.left) {
            yield* this[Symbol.iterator](current.left);
        }
        if (current) {
            yield current.value;
        }
        if (current.right) {
            yield* this[Symbol.iterator](current.right);
        }
    }
}

for (let node of treeIterable) {
    console.log(node);
}