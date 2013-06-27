/*!
 * Madison JavaScript Framework v0.1.1
 *
 * Copyright (C) 2013 Vinicius Knob
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
 * 
 * http://twitter.com/viniciusknob
 * http://github.com/viniciusknob
 */
(function (window, undefined) {
    var Madison = (function () {
        var
        
        // Versao atual
        _version = '0.1.1',

        // Regras inseridas pelo usuario
        _rules = [],

        Madison = function (obj) {
            if (obj) {
                if (obj.length) {
                    var size = obj.length;
                    for (var i = 0; i < size; i++) {
                        _rules.push(obj[i]);
                    }
                } else {
                    _rules.push(obj);
                }
            }
        };

        Madison.version = _version;
        
        Madison.execute = function () {
            var size = _rules.length;
            for (var i = 0; i < size; i++) {
                if (!_rules[i].rule()) {
                    throw _rules[i].errorMessage;
                }
            }
        };
        
        Madison.executeAndReturnErrors = function () {
            var size = _rules.length,
                errors = [];
            for (var i = 0; i < size; i++) {
                if (!_rules[i].rule()) {
                    errors.push(_rules[i].errorMessage);
                }
            }
            return errors;
        };
        
        return Madison;
    }());
    window.Madison = Madison;
}(window));