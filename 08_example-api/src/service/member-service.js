const members = require('../data/member-detail.json');

// 모든 멤버 조회
exports.findAllMembers = () => members;

// memberNo 로 조회
exports.findMemberByMemberCode = (memberNo) => {
    return members.filter(member => member.memberNo === parseInt(memberNo));
}