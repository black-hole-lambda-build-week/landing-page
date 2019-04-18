//dropdown 
class Member {
    constructor(member) {
        this.member = member;
        console.log(this)
    }
}















//step 1 
const teamMember = document.querySelectorAll('.member')

teamMember.forEach((member) => {
    return new Member(member);
});