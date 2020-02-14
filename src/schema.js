import { makeExecutableSchema } from "graphql-tools";
import typeDefs from "./types.graphql";
import users from "../data/users";
import departments from "../db_schema/models/departments";
import employees from "../db_schema/models/employees";
import db from "../db_schema/db";

const resolvers = {
  Query: {
    emp: (_, args) =>
    employees(db)
        .findAll({
          where: {
            empno: args.id
          }
        })
        .then(result => {
          return result;
        }),
    totalEmployees: () =>
    employees(db)
        .findAll({})
        .then(result => {
          return result.length;
        }),
    allEmployees: () =>
    employees(db)
        .findAll({})
        .then(result => {
          return result;
        })
  },
  Date: {
    __parseValue(value) {
      return new Date(value); // value from the client
    },
    __serialize(value) {
      return value.getTime(); // value sent to the client
    },
    __parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    }
  },
};

export default makeExecutableSchema({ typeDefs, resolvers });
