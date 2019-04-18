//dropdown 
class Member {
    constructor(member) {
        this.member = member;
    }
}















//step 1 
const teamMember = document.querySelectorAll('.member')

teamMember.forEach((member) => {
    return new Member(member);
});