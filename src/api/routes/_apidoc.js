// ------------------------------------------------------------------------------------------
// General apiDoc documentation blocks and old history blocks.
// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------
// Current Success.
// ------------------------------------------------------------------------------------------


// ------------------------------------------------------------------------------------------
// Current Errors.
// ------------------------------------------------------------------------------------------
/**
 * @apiDefine CreateUserError
 * @apiVersion 1.0.0
 *
 * @apiError NoAccessRight Only authenticated Admins can access the data.
 * @apiError UserNameTooShort Minimum of 5 characters required.
 *
 * @apiErrorExample  Response (example):
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": "UserNameTooShort"
 *     }
 */


// ------------------------------------------------------------------------------------------
// Current Permissions.
// ------------------------------------------------------------------------------------------
/**
 * @apiDefine admin Admin access rights needed.
 * Optionally you can write here further Informations about the permission.
 *
 * An "apiDefine"-block can have an "apiVersion", so you can attach the block to a specific version.
 *
 * @apiVersion 1.0.0
 */

/**
 * @apiDefine none No any access rights needed.
 * Optionally you can write here further Informations about the permission.
 *
 * An "apiDefine"-block can have an "apiVersion", so you can attach the block to a specific version.
 *
 * @apiVersion 1.0.0
 */

 /**
 * @apiDefine user User  access rights needed.
 * Optionally you can write here further Informations about the permission.
 *
 * An "apiDefine"-block can have an "apiVersion", so you can attach the block to a specific version.
 *
 * @apiVersion 1.0.0
 */

