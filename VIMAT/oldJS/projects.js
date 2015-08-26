/* 
 * Copyright (C) 2013 nick
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/* 
 * The MIT License
 *
 * Copyright 2013 nick.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var VIMAT = VIMAT || {};

VIMAT.namespace("VIMAT.MODEL.PROJECTS");

VIMAT.MODEL.PROJECTS.Project = function(n) {
    this.id = '';
    this.name = n;
    this.projectTaskIds = [];
    this.subProjectIds = [];
    this.parentProjectId = 'root';
    this.dueDate = '';
    this.compass = '';
    this.priority  = '';
    this.urgency = '';
    this.repeats = false;
    this.repeatTasksIndividually = true;
    this.dueOrCompletion = '';
    this.frequency = 0;
    this.interval = '';
};

VIMAT.MODEL.PROJECTS.ProjectTaskAssociation = function(tid, pid) {
    this.taskId = tid;
    this.projectId = pid;
};
VIMAT.MODEL.PROJECTS.TaskDependency = function(tid, rtid) {
    this.taskId = tid;
    this.requiredTaskId = rtid;
};
VIMAT.MODEL.PROJECTS.TaskDependency.getTaskId = function () {
    return this.taskId;
};
VIMAT.MODEL.PROJECTS.TaskDependency.setTaskId = function (tid) {
    this.taskId = tid;
};
VIMAT.MODEL.PROJECTS.TaskDependency.getRequiredTaskId = function () {
    return this.requiredProjectTaskId;
};
VIMAT.MODEL.PROJECTS.TaskDependency.setRequiredTaskId = function (rtid) {
    this.requiredTaskId = rtid;
};
VIMAT.MODEL.PROJECTS.taskDependencyList = (function () {
    // *** Private Properties
    var taskDependencyArray = [];

    // *** Private Methods
    function addTaskDependency(td) {
        taskDependencyArray.push(td);
    }
    function getTaskDependencyByIndex(i) {
        return taskDependencyArray[i];
    }
    function getTaskDependencyByTaskId(tid) {
        var l = getNumberOfTaskDependencies(),
            i;
        for (i = 0; i < l; i++) {
            if (taskDependencyArray[i].getTaskId() === tid) {
                return taskDependencyArray[i];
            }
        }
    }
    function getTaskDependencyByRequiredTaskId(rtid) {
        var l = getNumberOfTaskDependencies(),
            i;
        for (i = 0; i < l; i++) {
            if (taskDependencyArray[i].getRequiredTaskId() === rtid) {
                return taskDependencyArray[i];
            }
        }
    }
    function getTaskDependencyArrayIndexByTaskId(tid) {
        var l = getNumberOfTaskDependencies(),
            i;
        for (i = 0; i < l; i++) {
            if (taskDependencyArray[i].getTaskId() === tid) {
                return i;
            }
        }
    }
    function removeTaskDependencyByTaskId(tid) {
        var i = getTaskDependencyArrayIndexByTaskId(tid);
        taskDependencyArray.splice(i, 1);
    }
    function getNumberOfTaskDependencies() {
        return taskDependencyArray.length;
    }

    // *** Public API
    return {
        addTaskDependency:                      addTaskDependency,
        getTaskDependencyByIndex:               getTaskDependencyByIndex,
        getTaskDependencyByTaskId:              getTaskDependencyByTaskId,
        getTaskDependencyByRequiredTaskId:      getTaskDependencyByRequiredTaskId,
        getTaskDependencyArrayIndexByTaskId:    getTaskDependencyArrayIndexByTaskId,
        removeTaskDependencyByTaskId:           removeTaskDependencyByTaskId,
        getNumberOfTaskDependencies:            getNumberOfTaskDependencies
    };
}());

VIMAT.MODEL.PROJECTS.Project.prototype.getId = function () {
    return this.id;
};
VIMAT.MODEL.PROJECTS.Project.prototype.setId = function (i) {
    this.id = i;
};
VIMAT.MODEL.PROJECTS.Project.prototype.getName = function () {
    return this.name;
};
VIMAT.MODEL.PROJECTS.Project.prototype.setName = function (n) {
    this.name = n;
};
VIMAT.MODEL.PROJECTS.Project.prototype.addTaskId = function (id) {
    this.taskIds.push(id);
};
VIMAT.MODEL.PROJECTS.Project.prototype.removeTaskId = function (id) {
    var i, l = this.taskIds.length;
    for (i = 0; i < l; i++) {
        if (this.taskIds[i] === id) {
            this.taskIds.splice(i, 1);
            return true;
        }
    }
    return false;
};
VIMAT.MODEL.PROJECTS.Project.prototype.getDueDate = function () {
    return this.dueDate;
};
VIMAT.MODEL.PROJECTS.Project.prototype.setDueDate = function (d) {
    this.dueDate = d;
};
VIMAT.MODEL.PROJECTS.Project.prototype.getCompass = function () {
    return this.compass;
};
VIMAT.MODEL.PROJECTS.Project.prototype.setCompass = function (c) {
    this.compass = c;
};
VIMAT.MODEL.PROJECTS.Project.prototype.getPriority = function () {
    return this.priority;
};
VIMAT.MODEL.PROJECTS.Project.prototype.setPriority = function (p) {
    this.priority = p;
};
VIMAT.MODEL.PROJECTS.Project.prototype.getUrgency = function () {
    return this.urgency;
};
VIMAT.MODEL.PROJECTS.Project.prototype.setUrgency = function (u) {
    this.urgency = u;
};
VIMAT.MODEL.PROJECTS.Project.prototype.getRepeats = function () {
    return this.repeats;
};
VIMAT.MODEL.PROJECTS.Project.prototype.setRepeats = function (r) {
    this.repeats = r;
};
VIMAT.MODEL.PROJECTS.Project.prototype.getRepeatTasksIndividually = function () {
    return this.repeatTasksIndividually;
};
VIMAT.MODEL.PROJECTS.Project.prototype.setRepeatTasksIndividually = function (b) {
    this.repeatTasksIndividually = b;
};
VIMAT.MODEL.PROJECTS.Project.prototype.getDueOrCompletion = function () {
    return this.dueOrCompletion;
};
VIMAT.MODEL.PROJECTS.Project.prototype.setDueOrCompletion = function (doc) {
    this.dueOrCompletion = doc;
};
VIMAT.MODEL.PROJECTS.Project.prototype.getFrequency = function () {
    return this.frequency;
};
VIMAT.MODEL.PROJECTS.Project.prototype.setFrequency = function (f) {
    this.frequency = f;
};
VIMAT.MODEL.PROJECTS.Project.prototype.getInterval = function () {
    return this.interval;
};
VIMAT.MODEL.PROJECTS.Project.prototype.setInterval = function (i) {
    this.interval = i;
};
VIMAT.MODEL.PROJECTS.projectList = function () {
    // *** Private Properties
    var projectArray = [];

    // *** Private Methods
    function addProjectAndCreateId(p) {
        // Any new project created for the project list must go through this function
        // in order to get the proper ID
        p.setId(VIMAT.SETTINGS.taskList.getNextId()); // ***** Prefix ID with userID);
        projectArray.push(p);
    }
    function addProject(p) {
        // This function will not create a new ID
        // This is for tasks that have already been created and
        // assigned a unique ID
        projectArray.push(p);
    }
    function getProjectByIndex(i) {
        return projectArray[i];
    }
    function getProjectById(id) {
        var i = getProjectIndexById(id);
        return projectArray[i];
    }
    function getProjectIndexById(id) {
        var l = getNumberOfProjects(),
            i;
        for (i = 0; i < l; i++) {
            if (projectArray[i].getId() === id) {
                return i;
            }
        }
    }
    function removeProjectById(id) {
        var i = getProjectIndexById(id);
        projectArray.splice(i, 1);
    }
    function getNumberOfProjects() {
        return projectArray.length;
    }
    function getList() {
        return projectArray;
    }
    function setList(l) {
        projectArray = l;
    }
    function getRootLevelProjects() {
        var returnArray = [];
        projectArray.forEach(function(element, index, array) {
            if (element.parentProjectId === 'root') {
                returnArray.push(element);
            }
        });
        return returnArray;
    }

    // *** Public API
    return {
        addProjectAndCreateId:      addProjectAndCreateId,
        addProject:                 addProject,
        getProjectByIndex:          getProjectByIndex,
        getProjectById:             getProjectById,
        getProjectIndexById:        getProjectIndexById,
        removeProjectById:          removeProjectById,
        getNumberOfProjects:        getNumberOfProjects,
        getList:                    getList,
        setList:                    setList,
        getRootLevelProjects:       getRootLevelProjects
    };
};
