import { create, update, read, destroy } from '../service/note_ser';
export function add(req, res, next) {
    return res.status(200).json();
}
export function save(req, res, next) {
    if (req.body.docreate === 'create') {
        create(req.body.notekey,
            req.body.title,
            req.body.body);
        setTimeout(function () {
            return res.status(200).json({ message: 'Create' });
        }, 500);
    } else {
        update(req.body.id, req.body.notekey,
            req.body.title,
            req.body.body);
        setTimeout(function () {
            return res.status(200).json({ message: 'Update' });
        }, 500);
    }

}
export function view(req, res, next) {
    let note = undefined;
    if (req.query.id) {
        read(req.query.id).then(function (val) {
            return res.status(200).json(val);
        });
    }
    else {
        return res.status(200).json(note);
    }

}
export function dodestroy(req, res, next) {
    destroy(req.body.id);
    setTimeout(() => {
        return res.status(200).json({ message: 'Delete' });
    }, 500);
}
