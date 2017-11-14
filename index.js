
function printBadges(worker){

  for (let i = 0; i < worker.length; i++) {
    console.log(`Welcome ${worker[i]}! You are employee #${i+ 1}.`)
  }
  return worker;
}
