const fs = require('fs/promises');
const path = require('path');

const cubes = require('../db.json');  // взимаме JSON файла

// залагаме default параметри за да показва всички кубове и чейнваме филтри за опциите за търсене
exports.getAll = (search = '', fromInput, toInput) => {
    const from = Number(fromInput) || 0;
    const to = Number(toInput) || 6;

    const result = cubes
        .filter(x => x.name.toLowerCase().includes(search.toLowerCase()))
        .filter(x => x.difficultyLevel >= from && x.difficultyLevel <= to);

    return result;
};

// приема cubeId и връща от масива с кубовете cubeId
exports.getOne = (cubeId) => cubes[cubeId];   

// експортираме SAVE функция, която да ползваме в контролера
exports.save = (cube) => {
    cubes.push({ id: cubes[cubes.length - 1].id + 1, ...cube });

    let textData = JSON.stringify(cubes, '', 4);

    return fs.writeFile(path.resolve('src', 'db.json'), textData, { encoding: 'utf-8' })
}