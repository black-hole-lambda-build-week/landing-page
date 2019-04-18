//dropdown 
class MemberInfo {
    constructor(member) {
        this.member = member;
        this.selectMember = this.member.querySelector('img');
        this.memberContent = this.member.querySelector('.member-content');
        
        this.toggleMember = this.toggleMember.bind(this);
        this.selectMember.addEventListener('click', this.toggleMember);
    }
    //methods
    toggleMember() {
        this.memberContent.classList.toggle('member-content');
        this.member.classList.toggle('fadeIn');
    }
}

//step 1 
const teamMember = document.querySelectorAll('.member')

teamMember.forEach((member) => {
    return new MemberInfo(member);
});