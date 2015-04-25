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

VIMAT.namespace('VIMAT.HISTORY');

VIMAT.HISTORY.taskHistory = [];

VIMAT.HISTORY.CompletedTask = function(t, c) {
    this.compass = t.getCompass();
    this.JSONCompletedDate = c;
    this.priority = t.getPriority();
    this.urgency = t.getUrgency();
    this.folder = t.getFolder();
    this.project = '';
    this.context = t.getContext();
};

/*VIMAT.HISTORY.CompletedTask.prototype.getCompass = function () {
    return this.compass;
};

VIMAT.HISTORY.CompletedTask.prototype.getCompletedDate = function () {
    return this.JSONCompletedDate;
};*/

VIMAT.HISTORY.completedTasksByPropertyValueInLastXMs = function (prop, val, ms) {
    // Returns the number of completed tasks where a specific property is equal
    //      to a specific value in the last x amount of milliseconds.
    var i, sum = 0, ct,
        l = VIMAT.HISTORY.taskHistory.length,
        d = Date.parse(new Date());
    
    for (i = 0; i < l; i++) {
        ct = VIMAT.HISTORY.taskHistory[i];
        if (ct[prop] === val) {
            if (d - Date.parse(ct.JSONCompletedDate) < ms) {
                sum++;
            }
        }
    }    
    return sum;
};

/*VIMAT.HISTORY.getNumberOfCompletedTasksByCompass = function (cmpss, intrvl) {
    var i, sum = 0, ct,
        l = VIMAT.HISTORY.taskHistory.length,
        d = Date.parse(new Date());
    
    for (i = 0; i < l; i++) {
        ct = VIMAT.HISTORY.taskHistory[i];
        if (ct.compass === cmpss) {
            if (d - Date.parse(ct.JSONCompletedDate) < VIMAT.MODEL.MISC.getMsInDay()) {
                sum++;
            }
        }
    }
    
    return sum;
};*/

VIMAT.HISTORY.completedTasksByPropertyValue = function (prop, val) {
    var ctbc = [], ct, i, l = VIMAT.HISTORY.taskHistory.length;
    
    for (i = 0; i < l; i++) {
        ct = VIMAT.HISTORY.taskHistory[i];
        if (ct[prop] === val) {
            ctbc.push(ct);
        }
    }
    return ctbc;
};

/*VIMAT.HISTORY.completedTasksByCompass = function (cmpss) {
    var ctbc = [], ct, i, l = VIMAT.HISTORY.taskHistory.length;
    
    for (i = 0; i < l; i++) {
        ct = VIMAT.HISTORY.taskHistory[i];
        if (ct.compass === cmpss) {
            ctbc.push(ct);
        }
    }
    return ctbc;
};

VIMAT.HISTORY.completedTasksByFolder = function (fldr) {
    var ctbf = [], ct, i, l = VIMAT.HISTORY.taskHistory.length;
    
    for (i = 0; i < l; i++) {
        ct = VIMAT.HISTORY.taskHistory[i];
        if (ct.folder === fldr) {
            ctbf.push(ct);
        }
    }
    return ctbf;
};*/

VIMAT.HISTORY.msSinceLastCompletionByPropertyValue = function (prop, val) {
    var lctbc, ms, d = new Date();

    lctbc = VIMAT.HISTORY.lastCompletionTimeByPropertyValue(prop, val);
    if (lctbc === '(none completed)') {
        return '(none completed)';
    }
    ms = (Date.parse(d) - Date.parse(lctbc));   
    return ms;
};

/*VIMAT.HISTORY.hoursSinceLastCompletionByCompass = function (cmpss) {
    var lctbc, hours, d = new Date();

    lctbc = VIMAT.HISTORY.lastCompletionTimeByCompass(cmpss);
    if (lctbc === '(none completed)') {
        return '(none completed)';
    }
    hours = (Date.parse(d) - Date.parse(lctbc)) / VIMAT.MODEL.MISC.getMsInHour();
    
    return (hours.toFixed(0));
};

VIMAT.HISTORY.hoursSinceLastCompletionByFolder = function (fldr) {
    var lctbf, hours, d = new Date();

    lctbf = VIMAT.HISTORY.lastCompletionTimeByFolder(fldr);
    if (lctbf === '(none completed)') {
        return '(none completed)';
    }
    hours = (Date.parse(d) - Date.parse(lctbf)) / VIMAT.MODEL.MISC.getMsInHour();
    
    return (hours.toFixed(0));
};*/


// refactor following functions to lastCompletionTimeByPropertyValue(property, value)
VIMAT.HISTORY.lastCompletionTimeByPropertyValue = function (prop, val) {
    var i, l, ctbc, lctbc, ct;
    
    ctbc = VIMAT.HISTORY.completedTasksByPropertyValue(prop, val);
    l = ctbc.length;
    if (l === 0) {
        return '(none completed)';
    } 
    ct = ctbc[0];
    lctbc = ct.JSONCompletedDate;
    for (i = 1; i < l; i++) {
        if (ctbc[i].JSONCompletedDate > lctbc) {
            ct = ctbc[i];
            lctbc = ct.JSONCompletedDate;
        }
    }   
    return lctbc;
};

/*VIMAT.HISTORY.lastCompletionTimeByCompass = function (cmpss) {
    var i, l, ctbc, lctbc, ct;
    
    ctbc = VIMAT.HISTORY.completedTasksByCompass(cmpss);
    l = ctbc.length;
    if (l === 0) {
        return '(none completed)';
    } 
    ct = ctbc[0];
    lctbc = ct.JSONCompletedDate;
    
    for (i = 1; i < l; i++) {
        if (ctbc[i].JSONCompletedDate > lctbc) {
            ct = ctbc[i];
            lctbc = ct.JSONCompletedDate;
        }
    }
   
    return lctbc;
};
VIMAT.HISTORY.lastCompletionTimeByFolder = function (fldr) {
    var i, l, ctbf, lctbf, ct;
    
    ctbf = VIMAT.HISTORY.completedTasksByFolder(fldr);
    l = ctbf.length;
    if (l === 0) {
        return '(none completed)';
    } 
    ct = ctbf[0];
    lctbf = ct.JSONCompletedDate;
    
    for (i = 1; i < l; i++) {
        if (ctbf[i].JSONCompletedDate > lctbf) {
            ct = ctbf[i];
            lctbf = ct.JSONCompletedDate;
        }
    }
   
    return lctbf;
};*/
