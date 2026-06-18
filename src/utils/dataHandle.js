import fs from 'fs';

export function getData(json_path) {
    const data = fs.readFileSync(json_path, 'utf-8');

    return (JSON.parse(data));
}

export function updateData(json_path, data) {
    fs.writeFileSync(json_path, JSON.stringify(data, null, 2), 'utf-8');
}