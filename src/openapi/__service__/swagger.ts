/**
 * 此类型文件由swagger解析自动生成，请勿修改
 * <==================================>
 * Swagger Petstore - OpenAPI 3.0
 * OpenAPI spec version: 1.0.11
 * This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about
 * Swagger at [https://swagger.io](https://swagger.io). In the third iteration of the pet store, we've switched to the desi
 * gn first approach!
 * You can now help us improve the API whether it's by making changes to the definition itself or to the code.
 * That way, with time, we can improve the API in general, and expose some of the new features in OAS3.
 * _If you're looking for the Swagger 2.0/OAS 2.0 version of Petstore, then click [here](https://editor.swagger.io/?url=htt
 * ps://petstore.swagger.io/v2/swagger.yaml). Alternatively, you can load via the `Edit > Load Petstore OAS 2.0` menu optio
 * n!_
 * Some useful links:
 * - [The Pet Store repository](https://github.com/swagger-api/swagger-petstore)
 * - [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/res
 * ources/openapi.yaml)
 */
import type {
  PetDTO,
  FindPetsByStatusParams,
  FindPetsByTagsParams,
  UpdatePetWithFormParams,
  ApiResponseDTO,
  UploadFileParams,
  GetInventory200,
  OrderDTO,
  UserDTO,
  LoginUserParams,
} from "./swagger.schemas";
import { customInstance } from "../custom-instance";

export const getApi = () => {
  /**
   * Update an existing pet by Id
   * @summary Update an existing pet
   */
  const updatePet = (petDTO: PetDTO) => {
    return customInstance<PetDTO>({
      url: `/pet`,
      method: "put",
      headers: { "Content-Type": "application/json" },
      data: petDTO,
    });
  };

  /**
   * Add a new pet to the store
   * @summary Add a new pet to the store
   */
  const addPet = (petDTO: PetDTO) => {
    return customInstance<PetDTO>({
      url: `/pet`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: petDTO,
    });
  };

  /**
   * Multiple status values can be provided with comma separated strings
   * @summary Finds Pets by status
   */
  const findPetsByStatus = (params?: FindPetsByStatusParams) => {
    return customInstance<PetDTO[]>({
      url: `/pet/findByStatus`,
      method: "get",
      params,
    });
  };

  /**
   * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   * @summary Finds Pets by tags
   */
  const findPetsByTags = (params?: FindPetsByTagsParams) => {
    return customInstance<PetDTO[]>({
      url: `/pet/findByTags`,
      method: "get",
      params,
    });
  };

  /**
   * Returns a single pet
   * @summary Find pet by ID
   */
  const getPetById = (petId: number) => {
    return customInstance<PetDTO>({ url: `/pet/${petId}`, method: "get" });
  };

  /**
   * @summary Updates a pet in the store with form data
   */
  const updatePetWithForm = (
    petId: number,
    params?: UpdatePetWithFormParams
  ) => {
    return customInstance<unknown>({
      url: `/pet/${petId}`,
      method: "post",
      params,
    });
  };

  /**
   * delete a pet
   * @summary Deletes a pet
   */
  const deletePet = (petId: number) => {
    return customInstance<unknown>({ url: `/pet/${petId}`, method: "delete" });
  };

  /**
   * @summary uploads an image
   */
  const uploadFile = (
    petId: number,
    uploadFileBodies: Blob,
    params?: UploadFileParams
  ) => {
    return customInstance<ApiResponseDTO>({
      url: `/pet/${petId}/uploadImage`,
      method: "post",
      headers: { "Content-Type": "application/octet-stream" },
      data: uploadFileBodies,
      params,
    });
  };

  /**
   * Returns a map of status codes to quantities
   * @summary Returns pet inventories by status
   */
  const getInventory = () => {
    return customInstance<GetInventory200>({
      url: `/store/inventory`,
      method: "get",
    });
  };

  /**
   * Place a new order in the store
   * @summary Place an order for a pet
   */
  const placeOrder = (orderDTO: OrderDTO) => {
    return customInstance<OrderDTO>({
      url: `/store/order`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: orderDTO,
    });
  };

  /**
   * For valid response try integer IDs with value <= 5 or > 10. Other values will generate exceptions.
   * @summary Find purchase order by ID
   */
  const getOrderById = (orderId: number) => {
    return customInstance<OrderDTO>({
      url: `/store/order/${orderId}`,
      method: "get",
    });
  };

  /**
   * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
   * @summary Delete purchase order by ID
   */
  const deleteOrder = (orderId: number) => {
    return customInstance<unknown>({
      url: `/store/order/${orderId}`,
      method: "delete",
    });
  };

  /**
   * This can only be done by the logged in user.
   * @summary Create user
   */
  const createUser = (userDTO: UserDTO) => {
    return customInstance<unknown>({
      url: `/user`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: userDTO,
    });
  };

  /**
   * Creates list of users with given input array
   * @summary Creates list of users with given input array
   */
  const createUsersWithListInput = (userDTO: UserDTO[]) => {
    return customInstance<UserDTO>({
      url: `/user/createWithList`,
      method: "post",
      headers: { "Content-Type": "application/json" },
      data: userDTO,
    });
  };

  /**
   * @summary Logs user into the system
   */
  const loginUser = (params?: LoginUserParams) => {
    return customInstance<string>({
      url: `/user/login`,
      method: "get",
      params,
    });
  };

  /**
   * @summary Logs out current logged in user session
   */
  const logoutUser = () => {
    return customInstance<unknown>({ url: `/user/logout`, method: "get" });
  };

  /**
   * @summary Get user by user name
   */
  const getUserByName = (username: string) => {
    return customInstance<UserDTO>({ url: `/user/${username}`, method: "get" });
  };

  /**
   * This can only be done by the logged in user.
   * @summary Update user
   */
  const updateUser = (username: string, userDTO: UserDTO) => {
    return customInstance<unknown>({
      url: `/user/${username}`,
      method: "put",
      headers: { "Content-Type": "application/json" },
      data: userDTO,
    });
  };

  /**
   * This can only be done by the logged in user.
   * @summary Delete user
   */
  const deleteUser = (username: string) => {
    return customInstance<unknown>({
      url: `/user/${username}`,
      method: "delete",
    });
  };

  return {
    updatePet,
    addPet,
    findPetsByStatus,
    findPetsByTags,
    getPetById,
    updatePetWithForm,
    deletePet,
    uploadFile,
    getInventory,
    placeOrder,
    getOrderById,
    deleteOrder,
    createUser,
    createUsersWithListInput,
    loginUser,
    logoutUser,
    getUserByName,
    updateUser,
    deleteUser,
  };
};
export type UpdatePetResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getApi>["updatePet"]>>
>;
export type AddPetResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getApi>["addPet"]>>
>;
export type FindPetsByStatusResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getApi>["findPetsByStatus"]>>
>;
export type FindPetsByTagsResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getApi>["findPetsByTags"]>>
>;
export type GetPetByIdResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getApi>["getPetById"]>>
>;
export type UpdatePetWithFormResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getApi>["updatePetWithForm"]>>
>;
export type DeletePetResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getApi>["deletePet"]>>
>;
export type UploadFileResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getApi>["uploadFile"]>>
>;
export type GetInventoryResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getApi>["getInventory"]>>
>;
export type PlaceOrderResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getApi>["placeOrder"]>>
>;
export type GetOrderByIdResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getApi>["getOrderById"]>>
>;
export type DeleteOrderResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getApi>["deleteOrder"]>>
>;
export type CreateUserResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getApi>["createUser"]>>
>;
export type CreateUsersWithListInputResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getApi>["createUsersWithListInput"]>>
>;
export type LoginUserResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getApi>["loginUser"]>>
>;
export type LogoutUserResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getApi>["logoutUser"]>>
>;
export type GetUserByNameResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getApi>["getUserByName"]>>
>;
export type UpdateUserResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getApi>["updateUser"]>>
>;
export type DeleteUserResult = NonNullable<
  Awaited<ReturnType<ReturnType<typeof getApi>["deleteUser"]>>
>;
