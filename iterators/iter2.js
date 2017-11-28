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


var TreeIterable = {
    tree,
    [Symbol.iterator]: function () {
        let currentNode = this.tree;
        stack = [];
        return {
            [Symbol.iterator]: function () {
                return this;
            },
            next: function next() {
                if (stack.length > 0 || currentNode) {
                    if (currentNode) {
                        stack.push(currentNode);
                        currentNode = currentNode.left;
                        return next();
                    } else {
                        currentNode = stack.pop();
                        const data = currentNode.value;
                        currentNode = currentNode.right;
                        return {value: data, done: false};
                    }
                }
                return { done: true };

            }
        };
    }
};

;

for(let node of TreeIterable) {
    console.log(node);
}
