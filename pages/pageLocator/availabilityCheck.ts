import {linkByHref , byTagAndAttribute, buttonByText} from "../../helpers/selector";

export const Availabilitylocator={
    user_name: 'a.nav-link.dropdown-toggle',
    avaialabilityCheck_tab:"//span[normalize-space()='Availability Check']",
    user_account: "//p[contains(text(), '<replace>')]",
    edit_user_button: "//div[@class='d-flex align-items-center']//*[name()='svg']",
    window_popup_title: "//div[@class='d-flex align-items-center']//span",
    account_search_input: "//label[text()='Account']/following-sibling::div//input",
    ticktobook_checkbox: "//div[contains(@class,'mr-0 custom-control')]",
    btn_bookall:"//button[@class='btn btn-primary']",
    btn_next: "//button[contains(text(), 'Next')]",
    project_booking_input: "//label[text()='Project:']/following-sibling::div//input",
    btn_save_booking:"//span[contains(text(), 'Save Booking')]",
    request_tab: "//span[contains(text(), 'Requests')]",
    hours_per_day: "//label[text()='Hours per day:']/following-sibling::span/input",
    dropdown_user_option:"//li//span[contains(text(), 'Automation User 7 (user7auto)')]",
    avatar: "//span[contains(@class,'b-avatar badge-minimal')]",
    btn_logout:"//a[.='Logout']",
    availabilityCheckLink: linkByHref("report/user-booking"),
    availabilityCheckTxt: "//h4[@class='card-title text-uppercase font-weight-bolder']",
    exportButton: "button[class='btn btn-outline-success']",
    btn_show_more: '//span[contains(text(), "Show more")]',
    department_input: "//label[text()='Department']/following-sibling::div//input",
    result:"//p[normalize-space()='user7auto']",
    bookUser:"//h4[contains(@class,'card-title text-uppercase')]"
}