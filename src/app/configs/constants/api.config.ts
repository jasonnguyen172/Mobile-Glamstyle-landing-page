// import { environment } from '../../../environments/environment';
// export const BASE_URL = environment.apiUrl;
// export const HOST = environment.hostRedirect;
// const pathPrefix = `api`;
// const usersPrefix = `users/`;
// const userPrefix = `user/`;
// const serviceFB = `oauth/facebook/`;
// const serviceGG = `oauth/google/`;
// const loginSuffix = `login`;
// const signupSuffix = `signup`;
// const branch = `branches`;
// const branchId = `branchId`;
// const services = `services`;
// const booking = `bookings`;
// const coupon = `coupons`;
// const feedbacks = `feedbacks`;
// const ratings = `ratings`;
// const slug = `slug`;
// const notify = `notices`;
// const version = `v2`;

// export const API = {
//     API_OAUTH: {
//         API_OAUTH_LOGIN: `${BASE_URL}/${pathPrefix}/${usersPrefix}login`,
//         API_OAUTH_CHANGE_PW: `${BASE_URL}/${pathPrefix}/${userPrefix}password`,
//         API_OAUTH_FORGET_PW: `${BASE_URL}/${pathPrefix}/${usersPrefix}email/verify/send`,
//         API_OAUTH_LOGOUT: `${BASE_URL}/${pathPrefix}/${userPrefix}logout`,
//         API_GET_USER: `${BASE_URL}/${pathPrefix}/user`,
//         API_GET_USER_BY_ID: `${BASE_URL}/${pathPrefix}/${usersPrefix}`,
//         API_OAUTH_SIGNUP: `${BASE_URL}/${pathPrefix}/${usersPrefix}signup`,
//         API_OAUTH_LOGIN_FB: `${BASE_URL}/${pathPrefix}/${serviceFB}${loginSuffix}`,
//         API_OAUTH_LOGIN_GG: `${BASE_URL}/${pathPrefix}/${serviceGG}${loginSuffix}`,
//         API_OAUTH_SIGNUP_FB: `${BASE_URL}/${pathPrefix}/${serviceFB}${signupSuffix}`,
//         API_OAUTH_SIGNUP_GG: `${BASE_URL}/${pathPrefix}/${serviceGG}${signupSuffix}`,
//         API_OAUTH_PHONE_VERIFY: `${BASE_URL}/${pathPrefix}/${userPrefix}verification/mobile?code=`,
//     },
//     API_BRANCH: {
//         API_GET_BRANCHS: `${BASE_URL}/${pathPrefix}/${branch}`,
//         API_GET_BRANCH_BY_SLUG: `${BASE_URL}/${pathPrefix}/${branch}/${slug}/branchSlug`,
//         API_GET_BRANCH_BY_ID : `${BASE_URL}/${pathPrefix}/${branch}/branchId`,
//         API_GET_SERVICES_BY_BRANCH_ID: `${BASE_URL}/${pathPrefix}/${branch}/${branchId}/services`,
//         API_GET_GALLERY_BY_BRANCH_ID: `${BASE_URL}/${pathPrefix}/${branch}/${branchId}/images?type=gallery`,
//         API_GET_BANNER_BY_BRANCH_ID: `${BASE_URL}/${pathPrefix}/${branch}/${branchId}/images?type=banners`,
//         API_GET_AVATAR_BY_BRANCH_ID: `${BASE_URL}/${pathPrefix}/${branch}/${branchId}/images?type=avatar`,
//         API_GET_SLOTS_OF_SERVICE: `${BASE_URL}/${pathPrefix}/${services}`,
//         API_GET_CATEGORY_CONFIGURATION: `${BASE_URL}/${pathPrefix}/${branch}/${branchId}/categoryconfigurations`,
//         API_GET_BRANCHES_BY_SERVICE: `${BASE_URL}/${pathPrefix}/${branch}?serviceName=__serviceName`,
//         API_GET_BRANCH_FEEDBACKS: `${BASE_URL}/${pathPrefix}/${feedbacks}?branchID=__branchId`,
//     },
//     API_HOST: {
//         API_CREATE_HOST: `${BASE_URL}/${pathPrefix}/${userPrefix}${branch}`,
//         API_VERIFY_USER: `${BASE_URL}/${pathPrefix}/${userPrefix}sms/verify`,
//         API_RESEND_OTP: `${BASE_URL}/${pathPrefix}/${userPrefix}sms/verify/send`,
//     },
//     API_BOOKING: {
//         API_BOOKING: `${BASE_URL}/${pathPrefix}/${booking}`,
//         API_BOOKING_CHECK_COUPON: `${BASE_URL}/${pathPrefix}/${booking}`,
//         API_USER_BOOKING: `${BASE_URL}/${pathPrefix}/${userPrefix}${booking}`,
//         API_CANAEL_BOOKING: `${BASE_URL}/${pathPrefix}/${booking}/bookingId/cancel`,
//         API_BOOKING_V2: `${BASE_URL}/${pathPrefix}/${version}/${booking}`,
//     },
//     API_COUPON: {
//         API_CHECK_COUPON: `${BASE_URL}/${pathPrefix}/${coupon}/check`,
//     },
//     API_SERVICE: {
//         API_SERACH_SERVICE: `${BASE_URL}/${pathPrefix}/${services}/search`,
//         API_GET_SERVICE_BY_ID: `${BASE_URL}/${pathPrefix}/${services}/serviceId`
//     },
//     API_FEEDBACK: {
//         API_POST_FEEDBACK: `${BASE_URL}/${pathPrefix}/${userPrefix}${services}/serviceId/${feedbacks}`,
//         API_POST_FEEDBACK_V2: `${BASE_URL}/${pathPrefix}/feedbacks`,
//         API_POST_FEEDBACK_SERVICE: `${BASE_URL}/${pathPrefix}/${services}/serviceId/${ratings}`,
//         API_PATCH_FEEDBACK_BRANCHS: `${BASE_URL}/${pathPrefix}/${branch}/branchId/${feedbacks}`,
//         API_GET_FEEDBACK_BRANCHS: `${BASE_URL}/${pathPrefix}/${branch}/branchId/${feedbacks}`,
//         API_GET_FEEDBACK_REPLY: `${BASE_URL}/${pathPrefix}/${feedbacks}/feedbackId`,
//         API_PATCH_FEEDBACK_BOOKING: `${BASE_URL}/${pathPrefix}/bookings/bookingId/ratings`,
//         API_GET_USER_FEEDBACKS: `${BASE_URL}/${pathPrefix}/${userPrefix}feedbacks`,
//         API_GET_USER_FEEDBACKS_V2: `${BASE_URL}/${pathPrefix}/feedbacks`,
//         API_POST_FEEDBACK_BY_REFERENCE_V2: `${BASE_URL}/${pathPrefix}/${feedbacks}?branchID=__branchId&ratingInvited=__ratingInvited`,
//     },
//     API_USER: {
//         API_GET_USER_NOTIFICATION: `${BASE_URL}/${pathPrefix}/${userPrefix}notices`,
//         API_POST_ID_SWITCH_APP: `${BASE_URL}/${pathPrefix}/${usersPrefix}switchapp`,
//         API_GET_TOKEN_SWITCH_APP: `${BASE_URL}/${pathPrefix}/${usersPrefix}switchapp?token=_switchAppToken`
//     },
//     API_NOTIFICATION: {
//         API_PATCHTOKEN: `${BASE_URL}/${pathPrefix}/${userPrefix}${notify}/key`,
//         API_GET_NOTIFY: `${BASE_URL}/${pathPrefix}/${userPrefix}${notify}`
//     },
//     API_PUBLIC:{
//         API_GET_SERVICES : `${BASE_URL}/${pathPrefix}/defaultservices`,
//         API_GET_LOCATIONS : `${BASE_URL}/${pathPrefix}/defaultlocations`,
//     }
// };
