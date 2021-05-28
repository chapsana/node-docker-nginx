import { Router, Request,Response} from 'express';
import { getProfile, login, signUp } from '../controllers/auth.controller';
import { Validators } from '../../utils/validators';
import { isAuthenticated } from '../middlewares/auth.middleware';
import { controllerContainer } from '../../containers/controller.container';

export const router: Router = Router();

/**
 * @api {get} /api/v1/auth/ Auth Check Health
 * @apiName GetAuthHealth
 * @apiVersion 1.0.0
 * @apiGroup Guest
 * @apiPermission none
 * 
 * @apiExample Example usage:
 * curl -i http://localhost:3000/api/v1/auth/
 *
 * @apiSuccess {String} message Health Status.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Auth working!",
 *     }
 */
router.get('/', (req: Request, res: Response) => {
    res.json('Auth working!')
});

/**
 * @api {post} /api/v1/auth/register Create a new User
 * @apiVersion 1.0.0
 * @apiName PostUser
 * @apiGroup Guest
 * @apiPermission none
 *
 * @apiExample Example usage:
 * curl -i http://localhost:3000/api/v1/auth/register
 * 
 * @apiDescription In this case "apiUse" is defined and used.
 * Define blocks with params that will be used in several functions, so you dont have to rewrite them.
 *
 * 
 * 
 * @apiParam {String} firstName      First name of the User.
 * @apiParam {String} lastName      Last name of the User.
 * @apiParam {String} email     Email of the User.
 * @apiParam {String} password  Password of the User.
 * 
 * @apiSuccess {String} id         The new User-ID.
 *
 * @apiUse CreateUserError
 */
router.post('/register', Validators.getSignUpValidators(), controllerContainer(signUp));


/**
 * @api {post} /api/v1/auth/login Login a User
 * @apiVersion 1.0.0
 * @apiName LoginUser
 * @apiGroup Guest
 * @apiPermission none
 * 
 * @apiExample Example usage:
 * curl -i http://localhost:3000/api/v1/auth/login
 * 
 * @apiDescription In this case "apiUse" is defined and used.
 * Define blocks with params that will be used in several functions, so you dont have to rewrite them.
 *
 * @apiParam {String} email     Email of the User.
 * @apiParam {String} password  Password of the User.
 *
 * @apiSuccess {String} id         The new User-ID.
 *
 * @apiUse CreateUserError
 */
router.post('/login', Validators.getLoginValidators(), controllerContainer(login));


/**
 * @api {get} /api/v1/auth/me Get user profile
 * @apiVersion 1.0.0
 * @apiName GetUserProfile
 * @apiGroup User
 * @apiPermission user
 *
 * @apiExample Example usage:
 * curl -i http://localhost/api/v1/auth/me
 *
 * @apiSuccess {String}   id            The Users-ID.
 * @apiSuccess {String}   name          Fullname of the User.
 * @apiSuccess {String}   email         Email of the User.
 * @apiSuccess {String[]} nicknames     List of Users nicknames (Array of Strings).
 * @apiSuccess {Object}   profile       Profile data (example for an Object)
 * @apiSuccess {Number}   profile.age   Users age.
 * @apiSuccess {String}   profile.image Avatar-Image.
 *
 * @apiError NoAccessRight Only authenticated Admins can access the data.
 * @apiError UserNotFound   The <code>id</code> of the User was not found.
 *
 * @apiErrorExample Response (example):
 *     HTTP/1.1 401 Not Authenticated
 *     {
 *       "error": "NoAccessRight"
 *     }
 */
router.get('/me', isAuthenticated, getProfile);