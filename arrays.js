var chocolateBars = ["snickers","hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arrayIn, elementToAdd)
{
  var tempArray = [ elementToAdd, ...arrayIn]
  return tempArray;
}

function destructivelyAddElementToBeginningOfArray(arrayIn, elementToAdd)
{
  arrayIn.unshift(elementToAdd)
  return arrayIn;
}

<<<<<<< HEAD
function addElementToEndOfArray(arrayIn, elementToAdd)
=======
function addElementToEndofArray(arrayIn, elementToAdd)
>>>>>>> 22362fbe0ad4d9011423e21888f5fe8a3d253920
{
  var tempArray = [...arrayIn,elementToAdd]
  return tempArray;
}

<<<<<<< HEAD
function destructivelyAddElementToEndOfArray(arrayIn, elementToAdd)
{
  arrayIn.push(elementToAdd);
  return arrayIn;
}

function accessElementInArray(arrayIn, index)
{
  return arrayIn[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arrayIn)
{
  arrayIn.shift()
  return arrayIn;
}

function removeElementFromBeginningOfArray(arrayIn)
{
  return arrayIn.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(arrayIn)
{
  arrayIn.pop()
  return arrayIn;
}

function removeElementFromEndOfArray(arrayIn)
{
  return arrayIn.slice  (0, arrayIn.length - 1);
=======
function destructivelyAddElementToEndofArray(arrayIn, elementToAdd)
{
  arrayIn.push(elementToAdd);
}



function accessElementInArray(arrayIn, index)
{
  return arrayIn[index];
>>>>>>> 22362fbe0ad4d9011423e21888f5fe8a3d253920
}