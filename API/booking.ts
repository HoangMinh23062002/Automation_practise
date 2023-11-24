import { request, expect, APIRequestContext } from '@playwright/test';
import * as testData from '.././Configs/testData';
import urls from '../Configs/evn.data';


async function setContext(baseUrl: string): Promise<APIRequestContext> {
    const context = await request.newContext({
        baseURL: baseUrl,
    });
    return context;
}

export async function GetCustomerTocken(email: string, password: string): Promise<string> {
    const context = await setContext(urls.apiUrl)
    const response = await context.post(`/api/auth/login-test`, {
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify({
            email: email,
            password: password,
        }),
    });
    const responBody = await response.json()
    const Customer_tocken = responBody.response.token;
    return Customer_tocken;
}

export async function deketeBooking(Project_id: number, user_id: number, Customer_tocken: string): Promise<void> {
    const context = await setContext(urls.apiUrl)
    const response = await context.delete(`/api/projects/${Project_id}/delete-booking?userIds=${user_id}`, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${Customer_tocken}`,
        },
    });
    const responBody = await response.json()
    await expect(response).toBeOK();
    console.log(response)
    await expect(responBody.success).toBe(testData.API.booking.successful_deletion_message);
}