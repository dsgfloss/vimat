/*
	******************************************************************
	 Copyright 2013 Nicholas Warner

	 This file is part of vimat.

    vimat is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    vimat is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with vimat.  If not, see <http://www.gnu.org/licenses/>.
	******************************************************************
*/

function initialize(){
    // detectResolution();
    loadData();
    // fixDates()
    applySettings();
}

// tempory code to fix old dueDates being saved as strings instead of dates
// function fixDates() {
//     for (var i in tasks) {
//         if (typeof tasks[i].dueDate === 'string') {
//             tasks[i].dueDate = (new Date(tasks[i].dueDate)).toJSON();
//         }
//     }
// }

// Task List

function taskListHeaderClicked() {
    if (settings.taskListToolIsDisplayed) {
        hideTaskListTool();
    }
    else {
        displayTaskListTool();   
        displayTaskList();
    }
}

function addTaskButtonClicked() {
    var task = new Task(document.getElementById("taskInput").value);
    hideNewTaskForm();
    tasks.push(task);
    saveTasks();
    displayTaskList();
    if (settings.ticklerToolIsDisplayed) {
        displayTicklerTool();
    }
}

function checkBoxChanged(e) {
    var et = e.currentTarget;
    var t = et.id;
    tasks[t].finished = document.getElementById(t).checked;
    saveTasks();
}

function newTaskButtonClicked(){
    displayNewTaskForm();
}

function clearCompletedButtonClicked() {
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].finished) {
            tasks.splice(i, 1);
            i--;
        }
    }
    saveTasks();
    displayTaskList();
}

function moveToProjectButtonClicked() {
    var targetProject;
    // find out what project the tasks are going into

    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].finished) {
            // add the task to the selected project's task list
            
            // remove the task from the task list
            tasks.splice(i, 1);
            
            i--;
        }
    }
    
    saveTasks();
    // saveProjects;
    displayTaskList();
}

function taskClicked(e) {
    var et = e.currentTarget;
    
    // id of <span> containing task description that was clicked
    var t = et.id;
    if (t === currentTaskBeingEdited) {
        hideEditTaskForm(t);
        editTaskFormIsDisplayed = false;
        currentTaskBeingEdited = -1;
    }
    else {
        displayEditTaskForm(t);
    }
}

function editTaskButtonClicked() {
    // index of the current task in the array
    var t = currentTaskBeingEdited.slice(2);

    tasks[t].description = document.getElementById("taskInput").value;
    tasks[t].dueDate = (new Date(document.getElementById("dueDate").value)).toJSON();
    tasks[t].compass = document.getElementById("compass").value;
    saveTasks();
    displayTaskList();
}

// Tickler

function ticklerHeaderClicked() {
    if (settings.ticklerToolIsDisplayed) {
        hideTicklerTool();
    }
    else {
        displayTicklerTool();   
    }
}


// Compass


function compassHeaderClicked() {
    if (settings.compassToolIsDisplayed) {
        hideCompassTool();
    }
    else {
        displayCompassTool();
    }
    saveSettings();
}


// Time Tracker


function punchIn(e) {
    var et = e.currentTarget;
    var punchInId = et.id;
    var dt = new Date();
    var tt;
    
    if (punchInId === 'piw') {    
        tt = new TrackedTime(dt, 'Wellness');
    }
    if (punchInId === 'pie') {
        tt = new TrackedTime(dt, 'Education');
    }
    if (punchInId === 'pif') {
        tt = new TrackedTime(dt, 'Finance');
    }
    if (punchInId === 'pia') {
        tt = new TrackedTime(dt, 'Art');
    }
    if (punchInId === 'pic') {
        tt = new TrackedTime(dt, 'Chores');        
    }
    if (punchInId === 'pir') {
        tt = new TrackedTime(dt, 'Relations');        
    }
    if (punchInId === 'pip') {
        tt = new TrackedTime(dt, 'Projects');        
    }
    if (punchInId === 'pit') {
        tt = new TrackedTime(dt, 'Tools');        
    }

    trackedTimes.push(tt);
    var ttVarForCompass = setInterval(function () {displayTimeTrackerStatsForCompass()}, 1000);
}

function punchOut(e) {
    var et = e.currentTarget;
    var punchOutId = et.id;
    var dt = new Date();

    if (punchOutId === 'pow') {    
        for (var i in trackedTimes) {
            if (trackedTimes[i].startTime && !trackedTimes[i].endTime && trackedTimes[i].compass === 'Wellness') {
                trackedTimes[i].endTime = dt;
                break;
            }
        }
    }
    if (punchOutId === 'poe') {
        for (var i in trackedTimes) {
            if (trackedTimes[i].startTime && !trackedTimes[i].endTime && trackedTimes[i].compass === 'Education') {
                trackedTimes[i].endTime = dt;
                break;
            }
        }
    }
    if (punchOutId === 'pof') {
        for (var i in trackedTimes) {
            if (trackedTimes[i].startTime && !trackedTimes[i].endTime && trackedTimes[i].compass === 'Finance') {
                trackedTimes[i].endTime = dt;
                break;
            }
        }
    }
    if (punchOutId === 'poa') {
        for (var i in trackedTimes) {
            if (trackedTimes[i].startTime && !trackedTimes[i].endTime && trackedTimes[i].compass === 'Art') {
                trackedTimes[i].endTime = dt;
                break;
            }
        }
    }
    if (punchOutId === 'poc') {
        for (var i in trackedTimes) {
            if (trackedTimes[i].startTime && !trackedTimes[i].endTime && trackedTimes[i].compass === 'Chores') {
                trackedTimes[i].endTime = dt;
                break;
            }
        }
    }
    if (punchOutId === 'por') {
        for (var i in trackedTimes) {
            if (trackedTimes[i].startTime && !trackedTimes[i].endTime && trackedTimes[i].compass === 'Relations') {
                trackedTimes[i].endTime = dt;
                break;
            }
        }
    }
    if (punchOutId === 'pop') {
        for (var i in trackedTimes) {
            if (trackedTimes[i].startTime && !trackedTimes[i].endTime && trackedTimes[i].compass === 'Projects') {
                trackedTimes[i].endTime = dt;
                break;
            }
        }
    }
    if (punchOutId === 'pot') {
        for (var i in trackedTimes) {
            if (trackedTimes[i].startTime && !trackedTimes[i].endTime && trackedTimes[i].compass === 'Tools') {
                trackedTimes[i].endTime = dt;
                break;
            }
        }
    }
}


// Notes


function notesHeaderClicked() {
    if (settings.notesToolIsDisplayed) {
        hideNotesTool();
    }
    else {
        displayNotesTool();
    }
    saveSettings();
}

function newNoteButtonClicked(){
    displayNewNoteForm();
}

function addNoteButtonClicked() {
    var note = new Note(document.getElementById("noteDescriptionInput").value,
        document.getElementById("noteContentInput").value);
    hideNewNoteForm();
    notes.push(note);
    saveNotes();
    displayNotes();
}


// Project List

function projectListHeaderClicked() {
    if (projectListToolIsDisplayed()) {
        hideProjectListTool();
    }
    else {
        displayProjectListTool();
        displayProjectList();
    }
}

function addProjectButtonClicked() {
    var project = new Project(document.getElementById("projectInput").value);
    hideNewProjectForm();
    projects.push(project);
    saveProjects();
    displayProjectList();
}

function newProjectButtonClicked(){
    displayNewProjectForm();
}


// calendar


function calendarHeaderClicked() {
    if (calendarToolIsDisplayed()) {
        hideCalendarTool();
    }
    else {
        displayCalendarTool();
        displayCalendar();
    }
}


// Settings


function applySettings() {
    
    if (settings.taskListToolIsDisplayed) {
        displayTaskListTool();
    }
    
    if (settings.ticklerToolIsDisplayed) {
        displayTicklerTool();
    }
}