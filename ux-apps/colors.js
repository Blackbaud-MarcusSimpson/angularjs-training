angular.module('skytutorial').controller('PaletteTestController', [
    'bbPalette', function (bbPalette) {
        var self = this;
        self.paletteService = bbPalette;
        self.myColor = bbPalette.getColorByIndex(4, 'mono')
    }
]);