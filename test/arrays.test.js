// var chai = require('chai');
// var arrays = require('../assignment/arrays.assignment');

describe('basemode Testing Array Review', function() {
  describe('the createArray function', function() {
    it('should create an array with 6 elements', function() {
      var array = createArray();
      chai.expect(array).to.have.lengthOf(6);
    });
  });

  describe('the loopArray function', function() {
    it('should concatentate the values of the array together', function() {
      chai.expect(loopArray([1, 2, 3, 4])).to.equal('1234');
      chai.expect(loopArray([1, 'mohawk', 3, 'four'])).to.equal('1mohawk3four');
    });
  });

  describe('the arrayReverser function', function() {
    it('should reverse the array', function() {
      chai.expect(arrayReverser(['blue', 3, 'red'])).to.deep.equal(['red', 3, 'blue']);
      chai.expect(arrayReverser([42.4, 3, 'red', 'magenta'])).to.deep.equal(['magenta', 'red', 3, 42.4]);
    });
  });

  //
  // describe('the fourCubes function', function() {
  //   it('should return four cube objects with length properties', function() {
  //     chai.expect(assignment31.fourCubes()).to.deep.equal([{length: 12},{length: 24},{length: 11},{length: 2}]);
  //   });
  // });
  //
  // describe('the cubeVolumeTotal function', function() {
  //   it('should the volume total number', function() {
  //     chai.expect(assignment31.cubeVolumeTotal()).to.deep.equal(16891);
  //   });
  // });
});
