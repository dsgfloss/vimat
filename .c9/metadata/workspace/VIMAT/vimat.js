{"filter":false,"title":"vimat.js","tooltip":"/VIMAT/vimat.js","undoManager":{"mark":17,"position":17,"stack":[[{"start":{"row":68,"column":4},"end":{"row":68,"column":8},"action":"insert","lines":["    "],"id":0}],[{"start":{"row":68,"column":4},"end":{"row":68,"column":8},"action":"remove","lines":["    "],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":167,"column":0},"action":"remove","lines":["/*","\t******************************************************************","\t Copyright 2013 Nicholas Warner","","\t This file is part of vimat.","","    vimat is free software: you can redistribute it and/or modify","    it under the terms of the GNU General Public License as published by","    the Free Software Foundation, either version 3 of the License, or","    (at your option) any later version.","","    vimat is distributed in the hope that it will be useful,","    but WITHOUT ANY WARRANTY; without even the implied warranty of","    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the","    GNU General Public License for more details.","","    You should have received a copy of the GNU General Public License","    along with vimat.  If not, see <http://www.gnu.org/licenses/>.","\t******************************************************************","*/","","var VIMAT = VIMAT || {};","","/*","This file is a facade for 'js/controller.js'","This is essentially a file containing the functions for a large","    and growing list of onclick attributes defined in the html","    tags located in index.html and htm/htm.js.","This file may disappear or change as I learn how to implement","    event handlers. According to most of the textbooks, onclick","    in the markup is bad, but click event handler in the script","    is good. It seems to me that either way you have a little bit","    of bleeding between the presentation layer and the logic","    layer. I will, however, eventually follow convention.","*/","","VIMAT.namespace(\"VIMAT.CONTROLLER\");","","function initialize(){","    VIMAT.CONTROLLER.initialize();","}","","// Task List Old","function taskListHeaderClicked() {","    VIMAT.CONTROLLER.taskListHeaderClicked();","}","function stringifyTasks() {","    VIMAT.CONTROLLER.stringifyTasks();","}","function addTaskButtonClicked() {","    VIMAT.CONTROLLER.addTaskButtonClicked();","}","function checkBoxChanged(e) {","    VIMAT.CONTROLLER.checkBoxChanged(e);","}","function newTaskButtonClicked(){","    VIMAT.CONTROLLER.newTaskButtonClicked();","}","function clearCompletedButtonClicked() {","    VIMAT.CONTROLLER.clearCompletedButtonClicked();","}","function moveToProjectButtonClicked() {","    VIMAT.CONTROLLER.moveToProjectButtonClicked();","}","function taskClicked(e) {","    VIMAT.CONTROLLER.taskClicked(e);","}","function editTaskButtonClicked() {","    VIMAT.CONTROLLER.editTaskButtonClicked();","}","","// Task List Module New","function taskListModuleHeaderClicked() {","    VIMAT.CONTROLLER.taskListModuleHeaderClicked();","}","function textExportClicked() {","    VIMAT.CONTROLLER.textExportClicked();","}","function textImportClicked() {","    VIMAT.CONTROLLER.textImportClicked();","}","function importClicked() {","    VIMAT.CONTROLLER.importClicked();","}","function newTaskClicked(){","    VIMAT.CONTROLLER.newTaskClicked();","}","function clearCompletedClicked() {","    VIMAT.CONTROLLER.clearCompletedClicked();","}","function moveToProjectClicked() {","    VIMAT.CONTROLLER.moveToProjectClicked();","}","function addTaskClicked() {","    VIMAT.CONTROLLER.addTaskClicked();","}","// function checkBoxChanged(e) {","//     VIMAT.CONTROLLER.checkBoxChanged(e);","// }","// function taskClicked(e) {","//     VIMAT.CONTROLLER.taskClicked(e);","// }","function editTaskClicked() {","    VIMAT.CONTROLLER.editTaskClicked();","}","","// Tickler","function ticklerHeaderClicked() {","    VIMAT.CONTROLLER.ticklerHeaderClicked();","}","","// Compass","function compassHeaderClicked() {","    VIMAT.CONTROLLER.compassHeaderClicked();","}","","// Time Tracker","function punchIn(e) {","    VIMAT.CONTROLLER.punchIn(e);","}","function punchOut(e) {","    VIMAT.CONTROLLER.punchOut(e);","}","","// Notes","function notesHeaderClicked() {","    VIMAT.CONTROLLER.notesHeaderClicked();","}","function newNoteButtonClicked(){","    VIMAT.CONTROLLER.newNoteButtonClicked();","}","function addNoteButtonClicked() {","    VIMAT.CONTROLLER.addNoteButtonClicked();","}","","// Project List","function projectsHeaderClicked() {","    VIMAT.CONTROLLER.projectsHeaderClicked();","}","function addProjectButtonClicked() {","    VIMAT.CONTROLLER.addProjectButtonClicked();","}","function newProjectButtonClicked(){","    VIMAT.CONTROLLER.newProjectButtonClicked();","}","","// calendar","function calendarHeaderClicked() {","    VIMAT.CONTROLLER.calendarHeaderClicked();","}","","// List of Lists","function listOfListsHeaderClicked() {","    VIMAT.CONTROLLER.listOfListsHeaderClicked();","}","function listItemCheckBoxChanged(e) {","    VIMAT.CONTROLLER.listItemCheckBoxChanged(e);","}","function newListButtonClicked() {","    VIMAT.CONTROLLER.newListButtonClicked();","}","function newItemButtonClicked() {","    VIMAT.CONTROLLER.newItemButtonClicked();","}","function currentListChanged() {","    VIMAT.CONTROLLER.currentListChanged();","}",""],"id":2},{"start":{"row":0,"column":0},"end":{"row":167,"column":0},"action":"insert","lines":["/*","\t******************************************************************","\t Copyright 2013 Nicholas Warner","","\t This file is part of vimat.","","    vimat is free software: you can redistribute it and/or modify","    it under the terms of the GNU General Public License as published by","    the Free Software Foundation, either version 3 of the License, or","    (at your option) any later version.","","    vimat is distributed in the hope that it will be useful,","    but WITHOUT ANY WARRANTY; without even the implied warranty of","    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the","    GNU General Public License for more details.","","    You should have received a copy of the GNU General Public License","    along with vimat.  If not, see <http://www.gnu.org/licenses/>.","\t******************************************************************","*/","","var VIMAT = VIMAT || {};","","/*","This file is a facade for 'js/controller.js'","This is essentially a file containing the functions for a large","    and growing list of onclick attributes defined in the html","    tags located in index.html and htm/htm.js.","This file may disappear or change as I learn how to implement","    event handlers. According to most of the textbooks, onclick","    in the markup is bad, but click event handler in the script","    is good. It seems to me that either way you have a little bit","    of bleeding between the presentation layer and the logic","    layer. I will, however, eventually follow convention.","*/","","VIMAT.namespace(\"VIMAT.CONTROLLER\");","","function initialize(){","    VIMAT.CONTROLLER.initialize();","}","","// Task List Old","function taskListHeaderClicked() {","    VIMAT.CONTROLLER.taskListHeaderClicked();","}","function stringifyTasks() {","    VIMAT.CONTROLLER.stringifyTasks();","}","function addTaskButtonClicked() {","    VIMAT.CONTROLLER.addTaskButtonClicked();","}","function checkBoxChanged(e) {","    VIMAT.CONTROLLER.checkBoxChanged(e);","}","function newTaskButtonClicked(){","    VIMAT.CONTROLLER.newTaskButtonClicked();","}","function clearCompletedButtonClicked() {","    VIMAT.CONTROLLER.clearCompletedButtonClicked();","}","function moveToProjectButtonClicked() {","    VIMAT.CONTROLLER.moveToProjectButtonClicked();","}","function taskClicked(e) {","    VIMAT.CONTROLLER.taskClicked(e);","}","function editTaskButtonClicked() {","    VIMAT.CONTROLLER.editTaskButtonClicked();","}","","// Task List Module New","function taskListModuleHeaderClicked() {","    VIMAT.CONTROLLER.taskListModuleHeaderClicked();","}","function textExportClicked() {","    VIMAT.CONTROLLER.textExportClicked();","}","function textImportClicked() {","    VIMAT.CONTROLLER.textImportClicked();","}","function importClicked() {","    VIMAT.CONTROLLER.importClicked();","}","function newTaskClicked(){","    VIMAT.CONTROLLER.newTaskClicked();","}","function clearCompletedClicked() {","    VIMAT.CONTROLLER.clearCompletedClicked();","}","function moveToProjectClicked() {","    VIMAT.CONTROLLER.moveToProjectClicked();","}","function addTaskClicked() {","    VIMAT.CONTROLLER.addTaskClicked();","}","// function checkBoxChanged(e) {","//     VIMAT.CONTROLLER.checkBoxChanged(e);","// }","// function taskClicked(e) {","//     VIMAT.CONTROLLER.taskClicked(e);","// }","function editTaskClicked() {","    VIMAT.CONTROLLER.editTaskClicked();","}","","// Tickler","function ticklerHeaderClicked() {","    VIMAT.CONTROLLER.ticklerHeaderClicked();","}","","// Compass","function compassHeaderClicked() {","    VIMAT.CONTROLLER.compassHeaderClicked();","}","","// Time Tracker","function punchIn(e) {","    VIMAT.CONTROLLER.punchIn(e);","}","function punchOut(e) {","    VIMAT.CONTROLLER.punchOut(e);","}","","// Notes","function notesHeaderClicked() {","    VIMAT.CONTROLLER.notesHeaderClicked();","}","function newNoteButtonClicked(){","    VIMAT.CONTROLLER.newNoteButtonClicked();","}","function addNoteButtonClicked() {","    VIMAT.CONTROLLER.addNoteButtonClicked();","}","","// Project List","function projectsHeaderClicked() {","    VIMAT.CONTROLLER.projectsHeaderClicked();","}","function addProjectButtonClicked() {","    VIMAT.CONTROLLER.addProjectButtonClicked();","}","function newProjectButtonClicked(){","    VIMAT.CONTROLLER.newProjectButtonClicked();","}","","// calendar","function calendarHeaderClicked() {","    VIMAT.CONTROLLER.calendarHeaderClicked();","}","","// List of Lists","function listOfListsHeaderClicked() {","    VIMAT.CONTROLLER.listOfListsHeaderClicked();","}","function listItemCheckBoxChanged(e) {","    VIMAT.CONTROLLER.listItemCheckBoxChanged(e);","}","function newListButtonClicked() {","    VIMAT.CONTROLLER.newListButtonClicked();","}","function newItemButtonClicked() {","    VIMAT.CONTROLLER.newItemButtonClicked();","}","function currentListChanged() {","    VIMAT.CONTROLLER.currentListChanged();","}",""]}],[{"start":{"row":41,"column":0},"end":{"row":42,"column":0},"action":"insert","lines":["",""],"id":3}],[{"start":{"row":42,"column":0},"end":{"row":43,"column":0},"action":"insert","lines":["",""],"id":4}],[{"start":{"row":42,"column":0},"end":{"row":44,"column":1},"action":"insert","lines":["function initialize(){","    VIMAT.CONTROLLER.initialize();","}"],"id":5}],[{"start":{"row":42,"column":19},"end":{"row":42,"column":20},"action":"insert","lines":["M"],"id":6}],[{"start":{"row":42,"column":20},"end":{"row":42,"column":21},"action":"insert","lines":["o"],"id":7}],[{"start":{"row":42,"column":21},"end":{"row":42,"column":22},"action":"insert","lines":["b"],"id":8}],[{"start":{"row":42,"column":22},"end":{"row":42,"column":23},"action":"insert","lines":["i"],"id":9}],[{"start":{"row":42,"column":23},"end":{"row":42,"column":24},"action":"insert","lines":["l"],"id":10}],[{"start":{"row":42,"column":24},"end":{"row":42,"column":25},"action":"insert","lines":["e"],"id":11}],[{"start":{"row":43,"column":31},"end":{"row":43,"column":32},"action":"insert","lines":["M"],"id":12}],[{"start":{"row":43,"column":32},"end":{"row":43,"column":33},"action":"insert","lines":["o"],"id":13}],[{"start":{"row":43,"column":33},"end":{"row":43,"column":34},"action":"insert","lines":["b"],"id":14}],[{"start":{"row":43,"column":34},"end":{"row":43,"column":35},"action":"insert","lines":["i"],"id":15}],[{"start":{"row":43,"column":35},"end":{"row":43,"column":36},"action":"insert","lines":["l"],"id":16}],[{"start":{"row":43,"column":36},"end":{"row":43,"column":37},"action":"insert","lines":["e"],"id":17}]]},"ace":{"folds":[{"start":{"row":0,"column":2},"end":{"row":19,"column":0},"placeholder":"..."},{"start":{"row":23,"column":2},"end":{"row":34,"column":0},"placeholder":"..."}],"scrolltop":300,"scrollleft":0,"selection":{"start":{"row":43,"column":37},"end":{"row":43,"column":37},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":47,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1430984241000,"hash":"49f2223ae4d20372e0325fc73e528b1be58d0518"}