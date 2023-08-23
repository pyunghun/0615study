const express = require('express');
const router = express.Router();
const MemberController = require('../controller/member-controller');

router.get('/', MemberController.findAllMembers);
router.get('/:memberNo', MemberController.findMemberByMemberCode);

module.exports = router;
