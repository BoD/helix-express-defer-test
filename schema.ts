import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLBoolean,
  GraphQLID,
  specifiedDirectives,
  GraphQLDeferDirective,
  GraphQLStreamDirective,
} from "graphql";

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: () => ({
      computers: {
        type: new GraphQLList(
          new GraphQLObjectType({
            name: "Computer",
            fields: () => ({
              id: {
                type: GraphQLID,
              },
              cpu: {
                type: GraphQLString,
              },
              year: {
                type: GraphQLInt,
              },
              screen: {
                type: new GraphQLObjectType({
                  name: "Screen",
                  fields: () => ({
                    resolution: {
                      type: GraphQLString,
                    },
                    isColor: {
                      type: GraphQLBoolean,
                    },
                  })
                }),
              },
            })
          }),
        ),
        resolve: () => [{"id":"Computer1", "cpu":"386","year":1993,"screen":{"resolution":"640x480"}}, {"id":"Computer2","cpu":"486","year":1996,"screen":{"resolution":"800x600"}}],
      },
    }),
  }),


  directives: [
    ...specifiedDirectives,
    GraphQLDeferDirective,
    GraphQLStreamDirective,
  ],
});
