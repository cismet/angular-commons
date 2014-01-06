describe('AngularToolsServiceTest', function () {
    'use strict';

    var tools, scope;

    beforeEach(module('de.cismet.commons.angular.angularTools'));

    beforeEach(inject(function ($rootScope, AngularTools) {
        scope = $rootScope.$new();
        tools = AngularTools;
    }));

    it('safeApply should throw exception', function () {
        var exc, x;

        exc = {
            name: "IllegalArgumentException",
            message: "scope must not be undefined or null"
        };

        x = expect(function () { tools.safeApply(undefined); }).toThrow(exc);
        x = expect(function () { tools.safeApply(null);      }).toThrow(exc);
    });
});
