/*!
 * Madison JavaScript Framework v0.1
 *
 * Available under the GNU General Public License
 * http://www.gnu.org/licenses/gpl.html
 *
 * Author Vinicius Knob
 * Date: 2013-06-25
 */
(function (window, undefined) {
    var Madison = (function () {
        var
        
        // Versao atual
        _version = '0.1',

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