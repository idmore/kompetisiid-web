import {
  RECEIVE_DATA,
  RECEIVE_MORE_DATA,
  REQUEST_DATA
} from "../../../store/consts"
import { CALL_API } from "../../../store/middlewares/api"
import sealMiddleware from "../../helpers/seal"
import { objToQuery } from "string-manager/dist/modules/httpquery"

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES"
export const CREATE_COMPETITION = "CREATE_COMPETITION"
export const LIKE_COMPETITION = "LIKE_COMPETITION"

/**
 * @description function to create new competition
 * @param {Object} params
 */
export function createCompetition(params = {}) {
  return {
    [CALL_API]: {
      type: CREATE_COMPETITION,
      url: `/api/kompetisi/${sealMiddleware.generateSeal()}`,
      method: "post",
      filter: "competition_form",
      params
    }
  }
}

/**
 * @description function to update competition by id
 * @param {Object} params
 */
export function updateCompetition(params = {}, id) {
  return {
    [CALL_API]: {
      type: CREATE_COMPETITION,
      url: `/api/kompetisi/${id}/${sealMiddleware.generateSeal()}`,
      method: "put",
      filter: "competition_form",
      params
    }
  }
}

export function fetchJelajah(params = {}, filter) {
  const url = `/api/jelajah/${sealMiddleware.generateSeal()}`
  return {
    [CALL_API]: {
      typeSuccess: RECEIVE_DATA,
      typeWaiting: REQUEST_DATA,
      filter,
      method: "get",
      target: "kompetisi_jelajah",
      url: `${url}?${objToQuery(params)}`
    }
  }
}

export function fetchJelajahMore(params, filter) {
  const url = `/api/jelajah/${sealMiddleware.generateSeal()}`
  return {
    [CALL_API]: {
      typeSuccess: RECEIVE_MORE_DATA,
      typeWaiting: REQUEST_DATA,
      filter,
      method: "get",
      target: "kompetisi_jelajah",
      url: `${url}?${objToQuery(params)}`
    }
  }
}

export function getRelated(id, filter) {
  return {
    [CALL_API]: {
      typeSuccess: RECEIVE_DATA,
      typeWaiting: REQUEST_DATA,
      method: "get",
      filter,
      target: "kompetisi_related",
      url: `/api/kompetisi/related/${id}/${sealMiddleware.generateSeal()}`
    }
  }
}

export function getCategories() {
  return {
    [CALL_API]: {
      typeSuccess: RECEIVE_DATA,
      typeWaiting: REQUEST_DATA,
      method: "get",
      target: "kompetisi_categories",
      url: "/api/kompetisi/kategori"
    }
  }
}

export function setCategories(json) {
  return {
    type: RECEIVE_DATA,
    json,
    target: "kompetisi_categories"
  }
}

export function getDetail(id) {
  return {
    [CALL_API]: {
      url: `/api/kompetisi/${id}/${sealMiddleware.generateSeal()}`,
      method: "get",
      typeWaiting: REQUEST_DATA,
      typeSuccess: RECEIVE_DATA,
      target: "kompetisi_detail",
      filter: id
    }
  }
}

export function getFavoritedTags(params = {}) {
  return {
    [CALL_API]: {
      url: `/api/kompetisi/favoritedtags/${sealMiddleware.generateSeal()}`,
      method: "get",
      typeWaiting: REQUEST_DATA,
      typeSuccess: RECEIVE_DATA,
      target: "tags",
      filter: "favorited"
    }
  }
}

export function likeActionCompetition(competition_id = {}) {
  return {
    [CALL_API]: {
      type: LIKE_COMPETITION,
      params: { competition_id },
      filter: competition_id,
      method: "post",
      url: `/api/kompetisi/like/${competition_id}/${sealMiddleware.generateSeal()}`
    }
  }
}
