require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('5e1f749517d01765cff83830').then((task) => {
//   console.log(task);
//   return Task.countDocuments({ completed: false });
// }).then((result) => {
//   console.log(result);
// }).catch((e) => {
//   console.error(e);
// })

const findAndDelete = async (id, completed) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed });
  return count
};

findAndDelete('5e1f74ddd9f92065e46dc117', false).then((result) => {
  console.log(result);
}).catch((e) => {
  console.log(e);
});
