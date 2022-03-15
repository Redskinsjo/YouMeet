import mongoose from 'mongoose'

const Schema = mongoose.Schema

const EmployeeSchema = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  avatar: String,
  color: String,
  from: String,
  lat: String,
  long: String,
  starting: Date,
  job: String,
  description: String,
})
const EmployeeModel =
  mongoose.models.Employee || mongoose.model('Employee', EmployeeSchema)
export default EmployeeModel
