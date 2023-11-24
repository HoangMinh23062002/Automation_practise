

export const quickBookingLocator = {
  tab_quick_booking: `//span[contains(text(),'Quick Booking')]`,
  btn_save_booking: `//button[contains(@class,"btn-primary btn-sm")]`,
  txt_project: `//div[contains(@class,"justify-content-between")]//input[@class="vs__search"]`,
  project_name: `//*[contains(text(), '<replace>')]`,
  // btn_add_memember: `//button[contains(@class,"align-items-center btn-outline-success btn-sm")]`,
 // btn_add_memember: buttonByText("Add member"),
  txt_account: `//div[@class="mb-2 mt-2"]//input[@class="vs__search"]`,
  account_name: `xpath=//*[contains(text(), '<replace>')]`,
  success_booking_message: `//h5[contains(@class,'mb-0 font-weight-bolder')]`,
  start_date: {
    box: `input[placeholder='Start date']`,
    month: `(//select[@class='flatpickr-monthDropdown-months'])[1]`,
    month_option: `(//select[@class="flatpickr-monthDropdown-months"])[1]/option[contains(text(), "<replace>")]`,
    year: `(//input[@class='numInput cur-year'])[1]`,
    day_option: `(//div[@class="dayContainer"])[1]/span[@class="flatpickr-day" and text()=<replace>]`,
  },
  end_date: {
    box: `input[placeholder='End date']`,
    month: `(//select[@class='flatpickr-monthDropdown-months'])[2]`,
    month_option: `(//select[@class='flatpickr-monthDropdown-months'])[2]/option[contains(text(), "<replace>")]`,
    year: `(//input[@class='numInput cur-year'])[2]`,
    day_option: `(//div[@class="dayContainer"])[2]/span[@class="flatpickr-day" and text()=<replace>]`,
  },
  txt_hours_per_day: `input[placeholder='Hours per day']`,
  btn_delete_member: `//button[contains(text(),'Delete')]`,
  accountName: (accountName: string) => `//*[contains(text(), '${accountName}')]`,
  request_status: "//span[text()='Request Status']/following-sibling::span",
  close_request_button: "//button[@aria-label='Close']//*[name()='svg']",
};