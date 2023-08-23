class MemberDTO {

    memberNo;
    memberName;
    memberAge;
    gender;
    detail = {};

    constructor(data) {
        this.memberNo = data.memberNo;
        this.memberName = data.memberName;
        this.memberAge = data.memberAge;
        this.gender = data.gender;
        this.detail = data.detail;
    }
}

module.exports = MemberDTO;