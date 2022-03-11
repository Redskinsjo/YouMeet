import faker from "@faker-js/faker";

function generateEmployees() {
  let employees = [];
  for (let id = 1; id <= 10; id++) {
    let _id = faker.datatype.uuid();
    let firstname = faker.name.firstName();
    let lastname = faker.name.lastName();
    let avatar = faker.image.avatar();
    let color = faker.internet.color();
    let from = faker.address.country();
    let lat = faker.address.latitude();
    let long = faker.address.longitude();
    let starting = faker.date.past();
    let domain = faker.internet.domainName();
    let job = faker.name.jobTitle();
    let description = faker.lorem.paragraph();
    employees.push({
      _id,
      firstname,
      lastname,
      email: firstname + "." + lastname + "@" + domain,
      avatar,
      color,
      from,
      lat,
      long,
      starting,
      job,
      description,
    });
  }
  return { employees: employees };
}

let data = generateEmployees();

export default data;
