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

module.exports = router