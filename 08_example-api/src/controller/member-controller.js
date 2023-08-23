const HttpStatus = require('http-status');
const MemberService = require('../service/member-service');
const MemberDTO = require('../dto/member-dto');


exports.findAllMembers = (req, res, next) => {

    const members = MemberService.findAllMembers();

    // res.status(HttpStatus.OK).send({
    //     status: HttpStatus.OK,
    //     message: 'OK',
    //     result: members

        
    // });

    let responseString = "";

    members.map(member => {
        responseString += `
        <p>${member.memberNo}</p>
        <p>${member.memberName}</p>
        <p>${member.memberAge}</p>
        <p>${member.gender}</p>
        <img src=${member.detail.image}/>
        <p>${member.detail.description}</p>
        `
    });

    res.send(responseString);

}

exports.findMemberByMemberCode = (req, res, next) => {
    const member = MemberService.findMemberByMemberCode(req.params.memberNo);

    if(member && member.length > 0) {
        res.status(HttpStatus.OK).send({
            status: HttpStatus.OK,
            message: 'OK',
            result: member
        })
    }

    if(member && member.length === 0) {
        res.status(HttpStatus.NOT_FOUND).send({
            status: HttpStatus.NOT_FOUND,
            message: 'NOT FOUND',
            code: -99999,
            result: [],
            links: [
                {
                    rel: 'memberRegist',
                    method: 'POST',
                    href: 'https://api.ohgiraffers.com/api/v1/members'
                }
            ]
        })
    }
}