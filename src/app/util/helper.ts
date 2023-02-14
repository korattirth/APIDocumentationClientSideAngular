import {
  GetRequestBodyContent,
  GetRequestBodyContentDetail,
  RequestBody,
} from '../model/response-requestModel';

export function requestBodyExample(requestBody: RequestBody) {
  const requestBodyContent = new GetRequestBodyContent(requestBody['content'])
    .requestBodyContent;
  const contentType = Object.keys(requestBodyContent);
  let useContentType: string = '';
  contentType.includes('application/json')
    ? (useContentType = 'application/json')
    : (useContentType = contentType[0]);
  const bodyContentDetail = new GetRequestBodyContentDetail(
    requestBodyContent[useContentType]
  ).requestBodyContentDetail;
  return bodyContentDetail.example;
}
