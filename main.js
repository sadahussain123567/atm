#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let mybalance = 10001;
let mypin = 1234;
let pinanswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.yellow("ENTER YOUR PIN"),
    },
]);
if (pinanswer.pin === mypin) {
    console.log(chalk.green("CORRECT PIN CODE"));
    let operationans = await inquirer.prompt([
        {
            name: "operation",
            message: "PLEASE SELECT AN OPERATION",
            type: "list",
            choices: ["WITHDRAWAL", "CHECK BALANCE"],
        },
    ]);
    // console.log(operationans);
    if (operationans.operation === "WITHDRAWAL") {
        let amountans = await inquirer.prompt([
            {
                name: "amount",
                message: "ENTER YOUR AMOUNT",
                type: "number",
            },
        ]);
        if (mybalance >= amountans.amount) {
            console.log("SUCCESSFULLY WITHDRAWAL YOUR AMOUNT");
        }
        // console.log(`YOUR REMAINING BALANCE IS ${mybalance}`);
        if (mybalance <= amountans.amount) {
            console.log("YOUR BALANCE IS LOW");
        }
        //  if (mybalance <= amountans.amount){
        //   console.log(`YOUR REMAINING BALANCE IS ${mybalance}`)};
        // if (mybalance != amountans.amount) {
        //   console.log("YOUR BALANCE IS LOW");
        // }
    }
    else if (operationans.operation === "CHECK BALANCE") {
        console.log("YOUR BALANCE IS:" + mybalance);
    }
}
else {
    console.log("INCORRECT PIN CODE OR INSUFICIENT BALANCE IN YOUR ACCOUNT");
}
