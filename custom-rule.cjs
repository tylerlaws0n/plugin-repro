module.exports = {
  rules: {
    clsxRule: {
      meta: {
        type: "problem",
        docs: {
          description:
            "Use `cn` instead of `clsx` for proper merging of tw classnames",
        },
        messages: {
          avoid:
            "Use `cn` instead of `clsx` for proper merging of tw classnames",
        },
        // fixable: 'code',
        hasSuggestion: true,
        // schema: [
        //   {
        //     enum: ['always', 'never'],
        //   },
        // ],
        recommended: true,
      },
      create: function (context) {
        return {
          Function(node) {
            if (node.name === "clsx") {
              context.report({
                node,
                messageId: "avoid",
                data: {
                  name: "clsx",
                },
              });
            }
          },
        };
      },
    },
  },
};
