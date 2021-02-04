let notes = require('../models/notes');
exports.add = function (req, res, next) {
    /*res.render('noteedit', {
        title: "Add a note",
        title_note: "",
        docreate: true,
        notekey: "",
        note: undefined,
        id: ""
    });*/
    return res.json();
};
exports.save = function (req, res, next) {
    if (req.body.docreate === 'create') {
        notes.create(req.body.notekey,
            req.body.title,
            req.body.body);
        setTimeout(function () {
            return res.json({ message: 'Create' });
        }, 500);
    } else {
        notes.update(req.body.id, req.body.notekey,
            req.body.title,
            req.body.body);
        setTimeout(function () {
            return res.json({ message: 'Update' });
        }, 500);
    }

    /*setTimeout(function(){
        notes.id(req.body.notekey,
            req.body.title,
            req.body.body).then(function (val) {
                res.redirect('/noteview?id=' + val[0].id);
            }).catch(function(err){
                //console.log(err);
            })
    },500);*/

};
exports.view = function (req, res, next) {
    let note = undefined;
    if (req.query.id) {
        notes.read(req.query.id).then(function (val) {
            return res.json(val);
            /*res.render('noteview', {
                title: val[0].title ? val[0].title : "",
                notekey: val[0].key,
                note: val[0].body,
                id: val[0].id
            });*/
        });
    }
    else {
        return res.json(note);
        /*res.render('noteview', {
            title: note ? note.title : "",
            notekey: note ? note.key : "",
            note: note,
            id: req.query.id
        });*/
    }

};
/*exports.edit = function (req, res, next) {
    let note = undefined;
    if (req.query.id) {
        notes.read(req.query.id).then(function (val) {
            note = val[0];
            res.render('noteedit', {
                title: note ? ("Edit " + note.title) : "Add a Note",
                title_note: note.title,
                docreate: note ? false : true,
                notekey: note.key,
                note: note.body,
                id: note.id
            });
        });
    }

};
exports.destroy = function (req, res, next) {
    let note = undefined;
    if (req.query.id) {
        notes.read(req.query.id).then(function (val) {
            note = val[0];
            res.render('notedestroy', {
                title: note ? note.title : "",
                notekey: note.key,
                note: note.body,
                id: note.id
            });
        });
    }

};*/
exports.dodestroy = function (req, res, next) {
    notes.destroy(req.body.id);
    setTimeout(() => {
        return res.json({ message: 'Delete' });
    }, 500);
    //res.redirect('/');
}