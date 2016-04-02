var builder = require('botbuilder');
var prompts = require('../prompts');

// Export Command Dialog
module.exports = new builder.CommandDialog()
    .matches('^(hello|hi|howdy|hey)', [
        function (session) {
            if (session.userData.name) {
                builder.Prompts.text(session, 'What would you like to change it to?');
                session.send(prompts.nameSaved, {name: session.userData.name});
            } else {
                builder.Prompts.text(session, 'Hi! What is your name?');
            }
        },
        function (session, results) {
            session.userData.name = results.response;
            session.send(prompts.nameSaved, {name: session.userData.name});
            session.endDialog();
        }
    ])
    .matches('^(find a restaurant)', findRestaurant)
    .matches('^(search)', search)
    .matches('^(random)', random)
    .onDefault(builder.DialogAction.send("Sorry I didn't understand that"));



function findRestaurant(session, args) {
    
};

function search(session, args) {
    
}

function random(session) {
    
}

// function saveTask(session, args) {
//     if (args.matches) {
//         var task = args.matches[1];
//         if (task) {
//             if (!session.userData.tasks) {
//                 session.userData.tasks = [task];
//             }
//             else {
//                 session.userData.tasks.push(task);
//             }
//             session.send(prompts.saveTaskCreated, { index: session.userData.tasks.length, task: task });
//         }
//         else {
//             session.send(prompts.saveTaskMissing);
//         }
//     }
// }

// function finishTask(session, args) {
//     if (args.matches) {
//         var taskNumber = Number(args.matches[1]) - 1;
//         if (isNaN(taskNumber)) {
//             return session.send(prompts.finishTaskMissing);
//         }
//         if (!session.userData.tasks) {
//             session.userData.tasks = [];
//         }
//         if (session.userData.tasks.length <= taskNumber || taskNumber < 0) {
//             session.send(prompts.finishTaskInvalid, { index: taskNumber + 1 });
//         }
//         else {
//             session.userData.tasks = session.userData.tasks.slice(0, taskNumber).concat(session.userData.tasks.slice(taskNumber + 1));
//             session.send(prompts.finishTaskDone, { index: taskNumber + 1 });
//             listTasks(session, null);
//         }
//     }
//     else {
//         session.send(prompts.finishTaskMissing);
//     }
// }

// function listTasks(session, args) {
//     if (!session.userData.tasks) {
//         session.userData.tasks = [];
//     }
//     if (session.userData.tasks.length > 0) {
//         var list = '';
//         session.userData.tasks.forEach(function (value, index) {
//             list += session.gettext(prompts.listTaskItem, { index: index + 1, task: value });
//         });
//         session.send(prompts.listTaskList, list);
//     }
//     else {
//         session.send(prompts.listNoTasks);
//     }
// }

