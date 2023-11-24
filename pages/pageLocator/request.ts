

export const requestLocator = {
  tab_request: `//span[text()='Requests ']`,
  txt_status: `//label[text()='Status']//following-sibling::div[@dir="auto"]//input`,
  txt_project: `//label[text()='Project']//following-sibling::div[@dir="auto"]//input`,
  txt_division: `//label[text()='Division']//following-sibling::div[@dir="auto"]//input`,
  txt_requester: `//label[text()='Requester']//following-sibling::div[@dir="auto"]//input`,
  txt_approver: `//label[text()='Approver']//following-sibling::div[@dir="auto"]//input`,
  project_highlight: `//li[@class="vs__dropdown-option vs__dropdown-option--highlight" and contains(text(),'<replace>')]`,
  requester_highlight: `//li[@class="vs__dropdown-option vs__dropdown-option--highlight" and contains(text(),'<replace>')]`,
  approver_highlight: `//li[@class="vs__dropdown-option vs__dropdown-option--highlight" and contains(text(),'<replace>')]`,
  approval_request: `(//span[text()=' <replace> '])[1]`,
  btn_approve: `//span[text()='Approve']`,
  success_approve_message: `//h5[@class="mb-0 font-weight-bolder toastification-title text-success"]`,
  popup_approval_request: {
    btn_approve: `//div[contains(@class," mt-2 justify-content-end")]//span[text()='Approve']`,
    btn_reject: `//div[contains(@class," mt-2 justify-content-end")]//span[text()='Reject']`,
  },
  updated_message: `//div[@class='toastification']//h5`,
  status_request: `(//td[@aria-colindex='7']/span)[1]`,
  first_request: `tbody tr[role=row]:nth-child(<replace>)`,
  dropdown_list: `//ul[@role='listbox']`,
  span_selected: `//span[@class='vs__selected' and contains( text() , '<replace>')]`,
  requesterTbl: (accountName: string) => `(//span[contains(@class,'font-weight-bold d-block text-nowrap')][normalize-space()='${accountName}'])[1]`,
  selectAllCheck: `//th[@role='columnheader']//div[@class='mr-0 custom-control custom-control-inline custom-checkbox']//input`,
  approveBtn: `(//button[contains(@class,"btn mr-1 btn-primary")])[1]`,
  li_selected:"//li[contains( text() , '<replace>')]",
  btn_approve_all: "//span[normalize-space()='Approve']",
  btn_approve_all_inside:"//button[contains(text(),'Approve')]",
};