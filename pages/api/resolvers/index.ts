import data from "../data";

const resolvers = {
  Query: {
    employees: () => {
      return data.employees;
    },
    oneEmployee: (parent: any, { id }: any) => {
      const emp = data.employees.find((el) => el._id === id);
      return emp;
    },
  },
};

export default resolvers;
