const express = require('express')
const router = express.Router()
const uuid = require('uuid')

const data = require('../../data')

/* Get All */
router.get('/', (req, res) => {
    res.json(data.members)
})

/* Get One */
router.get('/:id', (req, res) => {
    const found = data.members.some(member => member.id === parseInt(req.params.id))

    if (found) {
      res.json(data.members.filter(member => member.id === parseInt(req.params.id)))
    } else {
      res.status(400).json({ msg: `No member with the id of ${req.params.id}` })
    }
})

/* Create One */
router.post('/', (req, res) => {
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'active'
  }

  if(!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: 'Please Enter Mail and Name.'})
  }

  data.members.push(newMember)
  res.json(data.members)
})

/* Update One */
router.put('/:id', (req, res) => {
  const found = data.members.some(member => member.id === parseInt(req.params.id));
  if (found) {
    const updMember = req.body;
    data.members.forEach(member => {
      if (member.id === parseInt(req.params.id)) {
        member.name = updMember.name ? updMember.name : member.name;
        member.email = updMember.email ? updMember.email : member.email;

        res.json({ msg: `Member ${updMember.name} updated`, member });
      }
    });
  } else {
    res.status(400).json({ msg: `No member with the id of ${req.params.id}` });
  }
});
module.exports = router