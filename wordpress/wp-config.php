<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ahmadkhallaf' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '!rF|fI&z- oD#`jQ9~T:69-HJ}<a0E3*mP.6qY.j<X9PgMH*jB_j&ufGM8hBWO/Q' );
define( 'SECURE_AUTH_KEY',  '}Y:h`A6|ZIoD>PLZJ-Zi-KNrVCalnTw0!Q]Lr5@:x~:gmPN|XYAtg8e7Hfl&]gnu' );
define( 'LOGGED_IN_KEY',    '>x]t7qXZW%@I$CGq#f@n$8W.5ZJqTF31#I4J.Vi1N48k[W$gm;A}5QbR[Z,Rie&|' );
define( 'NONCE_KEY',        'U]Pyd1DB#[^_15vz,6=}w_Wz(c2UXFdoq:qGEQVu1Z.wk,=PN9i~T$nadDpr+Cs ' );
define( 'AUTH_SALT',        ' l::sP2k)6ZwPGzUR%w!X1y^Qx7//xM=%n=/.$(h@PmU07Ec!!2BSfW*&o8i7KTB' );
define( 'SECURE_AUTH_SALT', '2W#PdZ:KSfPa6L%hYp}dK;LIncaY?7ABF~GlX`Rk6%{5J9,_%:|L8==`qec#,hkS' );
define( 'LOGGED_IN_SALT',   '}vcmC.&UKg.ZN~h]]D1 _v!ZBH,@I`4o9{x%E+kw5]&#fa>_~)l*V![7Pu}9p- =' );
define( 'NONCE_SALT',       '(k>RsjAExF5Z:/7dG[nbc&Kos~gl] J3an%O|k|B%Cq9XTST^-NhhV8B&J-[<(6H' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
