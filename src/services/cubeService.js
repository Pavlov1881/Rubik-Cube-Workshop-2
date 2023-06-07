const fs = require('fs/promises');
const path = require('path');

const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');
// const cubes = require('../db.json');  // взимаме JSON файла

// залагаме default параметри за да показва всички кубове и чейнваме филтри за опциите за търсене
exports.getAll = async (search = '', fromInput, toInput) => {
let cubes = await Cube.find().lean()
return cubes

};

// приема cubeId и връща от масива с кубовете cubeId
exports.getOne = (cubeId) => Cube.findById(cubeId).populate('accessories');

// експортираме SAVE функция, която да ползваме в контролера
exports.create = (cube) => {
    return Cube.create(cube);
}

exports.attachAccessory = async (cubeId, accessoryId) => {
    const cube = await Cube.findById(cubeId);
    const accessory = await Accessory.findById(accessoryId);

    cube.accessories.push(accessory);

    await cube.save();
    await accessory.save();
}