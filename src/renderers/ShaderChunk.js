import lut_3d_fragment from './ShaderChunk/lut_3d_fragment.glsl.js';
import lut_tetrahedral_fragment from './ShaderChunk/lut_tetrahedral_fragment.glsl.js';
import curves_rgb_fragment from './ShaderChunk/curves_rgb_fragment.glsl.js';
import color_wheels_fragment from './ShaderChunk/color_wheels_fragment.glsl.js';
import hsl_selective_fragment from './ShaderChunk/hsl_selective_fragment.glsl.js';
import white_balance_fragment from './ShaderChunk/white_balance_fragment.glsl.js';
import shadows_highlights_fragment from './ShaderChunk/shadows_highlights_fragment.glsl.js';
import vibrance_fragment from './ShaderChunk/vibrance_fragment.glsl.js';
import split_toning_fragment from './ShaderChunk/split_toning_fragment.glsl.js';
import faded_film_fragment from './ShaderChunk/faded_film_fragment.glsl.js';
import bleach_bypass_fragment from './ShaderChunk/bleach_bypass_fragment.glsl.js';
import monochrome_film_fragment from './ShaderChunk/monochrome_film_fragment.glsl.js';
import color_matrix_fragment from './ShaderChunk/color_matrix_fragment.glsl.js';
import aces_filmic_fragment from './ShaderChunk/aces_filmic_fragment.glsl.js';
import reinhard_tonemapping_fragment from './ShaderChunk/reinhard_tonemapping_fragment.glsl.js';
import exposure_fragment from './ShaderChunk/exposure_fragment.glsl.js';
import levels_histogram_fragment from './ShaderChunk/levels_histogram_fragment.glsl.js';
import cinematic_contrast_fragment from './ShaderChunk/cinematic_contrast_fragment.glsl.js';
import hdr_bloom_fragment from './ShaderChunk/hdr_bloom_fragment.glsl.js';
import false_color_fragment from './ShaderChunk/false_color_fragment.glsl.js';
import posterize_fragment from './ShaderChunk/posterize_fragment.glsl.js';
import solarize_fragment from './ShaderChunk/solarize_fragment.glsl.js';
import thermal_vision_fragment from './ShaderChunk/thermal_vision_fragment.glsl.js';
import night_mode_fragment from './ShaderChunk/night_mode_fragment.glsl.js';
import color_inversion_fragment from './ShaderChunk/color_inversion_fragment.glsl.js';
import skin_smoothing_bilateral_fragment from './ShaderChunk/skin_smoothing_bilateral_fragment.glsl.js';
import skin_tone_mask_fragment from './ShaderChunk/skin_tone_mask_fragment.glsl.js';
import skin_brighten_fragment from './ShaderChunk/skin_brighten_fragment.glsl.js';
import teeth_whitening_fragment from './ShaderChunk/teeth_whitening_fragment.glsl.js';
import eye_sharpen_fragment from './ShaderChunk/eye_sharpen_fragment.glsl.js';
import face_warp_liquify_fragment from './ShaderChunk/face_warp_liquify_fragment.glsl.js';
import camera_vignette_radial_fragment from './ShaderChunk/camera_vignette_radial_fragment.glsl.js';
import lens_distortion_barrel_fragment from './ShaderChunk/lens_distortion_barrel_fragment.glsl.js';
import lens_chromatic_aberration_fragment from './ShaderChunk/lens_chromatic_aberration_fragment.glsl.js';
import lens_anamorphic_flare_fragment from './ShaderChunk/lens_anamorphic_flare_fragment.glsl.js';
import lens_bokeh_depth_fragment from './ShaderChunk/lens_bokeh_depth_fragment.glsl.js';
import sensor_noise_denoise_fragment from './ShaderChunk/sensor_noise_denoise_fragment.glsl.js';
import sensor_anti_banding_fragment from './ShaderChunk/sensor_anti_banding_fragment.glsl.js';
import green_screen_chroma_key_fragment from './ShaderChunk/green_screen_chroma_key_fragment.glsl.js';
import segmentation_mask_composite_fragment from './ShaderChunk/segmentation_mask_composite_fragment.glsl.js';
import vhs_tracking_jitter_fragment from './ShaderChunk/vhs_tracking_jitter_fragment.glsl.js';
import vhs_tape_noise_fragment from './ShaderChunk/vhs_tape_noise_fragment.glsl.js';
import crt_scanline_phosphor_fragment from './ShaderChunk/crt_scanline_phosphor_fragment.glsl.js';
import glitch_block_displace_fragment from './ShaderChunk/glitch_block_displace_fragment.glsl.js';
import glitch_rgb_split_fragment from './ShaderChunk/glitch_rgb_split_fragment.glsl.js';
import glitch_interlace_fragment from './ShaderChunk/glitch_interlace_fragment.glsl.js';
import analog_film_grain_fragment from './ShaderChunk/analog_film_grain_fragment.glsl.js';
import film_dust_scratches_fragment from './ShaderChunk/film_dust_scratches_fragment.glsl.js';
import film_burn_leak_fragment from './ShaderChunk/film_burn_leak_fragment.glsl.js';
import film_sprocket_holes_fragment from './ShaderChunk/film_sprocket_holes_fragment.glsl.js';
import dither_bayer_matrix_fragment from './ShaderChunk/dither_bayer_matrix_fragment.glsl.js';
import dither_blue_noise_fragment from './ShaderChunk/dither_blue_noise_fragment.glsl.js';
import dither_floyd_steinberg_fragment from './ShaderChunk/dither_floyd_steinberg_fragment.glsl.js';
import halftone_cmyk_dots_fragment from './ShaderChunk/halftone_cmyk_dots_fragment.glsl.js';
import ascii_art_raster_fragment from './ShaderChunk/ascii_art_raster_fragment.glsl.js';
import pixelate_mosaic_fragment from './ShaderChunk/pixelate_mosaic_fragment.glsl.js';
import hexagonal_pixelate_fragment from './ShaderChunk/hexagonal_pixelate_fragment.glsl.js';
import crosshatch_sketch_fragment from './ShaderChunk/crosshatch_sketch_fragment.glsl.js';
import edge_detect_sobel_fragment from './ShaderChunk/edge_detect_sobel_fragment.glsl.js';
import emboss_relief_fragment from './ShaderChunk/emboss_relief_fragment.glsl.js';
import glow_neon_soft_fragment from './ShaderChunk/glow_neon_soft_fragment.glsl.js';
import bloom_threshold_downsample_fragment from './ShaderChunk/bloom_threshold_downsample_fragment.glsl.js';
import bloom_upsample_composite_fragment from './ShaderChunk/bloom_upsample_composite_fragment.glsl.js';
import light_leak_gradient_fragment from './ShaderChunk/light_leak_gradient_fragment.glsl.js';
import light_rays_godrays_fragment from './ShaderChunk/light_rays_godrays_fragment.glsl.js';
import disco_strobe_pulse_fragment from './ShaderChunk/disco_strobe_pulse_fragment.glsl.js';
import sparkle_starburst_fragment from './ShaderChunk/sparkle_starburst_fragment.glsl.js';
import rainbow_prism_caustics_fragment from './ShaderChunk/rainbow_prism_caustics_fragment.glsl.js';
import shadow_drop_gaussian_fragment from './ShaderChunk/shadow_drop_gaussian_fragment.glsl.js';
import shadow_inner_soft_fragment from './ShaderChunk/shadow_inner_soft_fragment.glsl.js';
import stroke_outline_expand_fragment from './ShaderChunk/stroke_outline_expand_fragment.glsl.js';
import particles_bokeh_quads_fragment from './ShaderChunk/particles_bokeh_quads_fragment.glsl.js';
import particles_confetti_mesh_fragment from './ShaderChunk/particles_confetti_mesh_fragment.glsl.js';
import particles_fireworks_fragment from './ShaderChunk/particles_fireworks_fragment.glsl.js';
import particles_snow_dust_fragment from './ShaderChunk/particles_snow_dust_fragment.glsl.js';
import transition_crossfade_fragment from './ShaderChunk/transition_crossfade_fragment.glsl.js';
import transition_whip_pan_fragment from './ShaderChunk/transition_whip_pan_fragment.glsl.js';
import transition_zoom_in_out_fragment from './ShaderChunk/transition_zoom_in_out_fragment.glsl.js';
import transition_iris_circle_fragment from './ShaderChunk/transition_iris_circle_fragment.glsl.js';
import transition_glitch_tearing_fragment from './ShaderChunk/transition_glitch_tearing_fragment.glsl.js';
import transition_linear_wipe_fragment from './ShaderChunk/transition_linear_wipe_fragment.glsl.js';
import transition_radial_clock_wipe_fragment from './ShaderChunk/transition_radial_clock_wipe_fragment.glsl.js';
import transition_page_curl_fragment from './ShaderChunk/transition_page_curl_fragment.glsl.js';
import transition_water_ripple_fragment from './ShaderChunk/transition_water_ripple_fragment.glsl.js';
import transition_cube_3d_turn_fragment from './ShaderChunk/transition_cube_3d_turn_fragment.glsl.js';
import transition_directional_warp_fragment from './ShaderChunk/transition_directional_warp_fragment.glsl.js';
import transition_burn_dissolve_fragment from './ShaderChunk/transition_burn_dissolve_fragment.glsl.js';
import transition_pixelize_crumble_fragment from './ShaderChunk/transition_pixelize_crumble_fragment.glsl.js';
import transition_cross_zoom_blur_fragment from './ShaderChunk/transition_cross_zoom_blur_fragment.glsl.js';
import transition_kaleidoscope_fragment from './ShaderChunk/transition_kaleidoscope_fragment.glsl.js';
import transition_film_strip_roll_fragment from './ShaderChunk/transition_film_strip_roll_fragment.glsl.js';
import transition_swirl_twirl_fragment from './ShaderChunk/transition_swirl_twirl_fragment.glsl.js';
import transition_grid_tiles_flip_fragment from './ShaderChunk/transition_grid_tiles_flip_fragment.glsl.js';
import transition_flash_whiteout_fragment from './ShaderChunk/transition_flash_whiteout_fragment.glsl.js';
import transition_heart_wipe_fragment from './ShaderChunk/transition_heart_wipe_fragment.glsl.js';
import blend_modes_complete_fragment from './ShaderChunk/blend_modes_complete_fragment.glsl.js';
import mask_alpha_matte_fragment from './ShaderChunk/mask_alpha_matte_fragment.glsl.js';
import mask_luma_matte_fragment from './ShaderChunk/mask_luma_matte_fragment.glsl.js';
import mask_invert_matte_fragment from './ShaderChunk/mask_invert_matte_fragment.glsl.js';
import transform_2d_affine_vertex from './ShaderChunk/transform_2d_affine_vertex.glsl.js';
import transform_perspective_corner_pin_vertex from './ShaderChunk/transform_perspective_corner_pin_vertex.glsl.js';
import transform_curvature_cylinder_vertex from './ShaderChunk/transform_curvature_cylinder_vertex.glsl.js';
import crop_rounded_corners_fragment from './ShaderChunk/crop_rounded_corners_fragment.glsl.js';
import crop_circle_avatar_fragment from './ShaderChunk/crop_circle_avatar_fragment.glsl.js';
import mirror_reflection_water_fragment from './ShaderChunk/mirror_reflection_water_fragment.glsl.js';
import mirror_kaleidoscope_repeat_fragment from './ShaderChunk/mirror_kaleidoscope_repeat_fragment.glsl.js';
import uv_tile_repeat_fragment from './ShaderChunk/uv_tile_repeat_fragment.glsl.js';
import uv_stretch_aspect_fit_fragment from './ShaderChunk/uv_stretch_aspect_fit_fragment.glsl.js';
import uv_fisheye_bulge_fragment from './ShaderChunk/uv_fisheye_bulge_fragment.glsl.js';
import uv_twirl_vortex_fragment from './ShaderChunk/uv_twirl_vortex_fragment.glsl.js';
import text_msdf_renderer_fragment from './ShaderChunk/text_msdf_renderer_fragment.glsl.js';
import text_sdf_outline_fragment from './ShaderChunk/text_sdf_outline_fragment.glsl.js';
import text_sdf_glow_fragment from './ShaderChunk/text_sdf_glow_fragment.glsl.js';
import text_gradient_fill_fragment from './ShaderChunk/text_gradient_fill_fragment.glsl.js';
import text_wave_deform_vertex from './ShaderChunk/text_wave_deform_vertex.glsl.js';
import text_karaoke_sweep_fragment from './ShaderChunk/text_karaoke_sweep_fragment.glsl.js';
import text_typewriter_reveal_fragment from './ShaderChunk/text_typewriter_reveal_fragment.glsl.js';
import text_glitch_jitter_fragment from './ShaderChunk/text_glitch_jitter_fragment.glsl.js';
import text_3d_extrusion_fragment from './ShaderChunk/text_3d_extrusion_fragment.glsl.js';
import text_sticker_backdrop_fragment from './ShaderChunk/text_sticker_backdrop_fragment.glsl.js';
import common from './ShaderChunk/common.glsl.js';
import uv_pars_vertex from './ShaderChunk/uv_pars_vertex.glsl.js';
import uv_pars_fragment from './ShaderChunk/uv_pars_fragment.glsl.js';
import color_pars_fragment from './ShaderChunk/color_pars_fragment.glsl.js';
import default_vertex from './ShaderChunk/default_vertex.glsl.js';
import default_fragment from './ShaderChunk/default_fragment.glsl.js';
import packing from './ShaderChunk/packing.glsl.js';
import fog_linear_fragment from './ShaderChunk/fog_linear_fragment.glsl.js';
import blur_gaussian_fragment from './ShaderChunk/blur_gaussian_fragment.glsl.js';
import color_adjust_fragment from './ShaderChunk/color_adjust_fragment.glsl.js';

export const ShaderChunk = {
    lut_3d_fragment,
    lut_tetrahedral_fragment,
    curves_rgb_fragment,
    color_wheels_fragment,
    hsl_selective_fragment,
    white_balance_fragment,
    shadows_highlights_fragment,
    vibrance_fragment,
    split_toning_fragment,
    faded_film_fragment,
    bleach_bypass_fragment,
    monochrome_film_fragment,
    color_matrix_fragment,
    aces_filmic_fragment,
    reinhard_tonemapping_fragment,
    exposure_fragment,
    levels_histogram_fragment,
    cinematic_contrast_fragment,
    hdr_bloom_fragment,
    false_color_fragment,
    posterize_fragment,
    solarize_fragment,
    thermal_vision_fragment,
    night_mode_fragment,
    color_inversion_fragment,
    skin_smoothing_bilateral_fragment,
    skin_tone_mask_fragment,
    skin_brighten_fragment,
    teeth_whitening_fragment,
    eye_sharpen_fragment,
    face_warp_liquify_fragment,
    camera_vignette_radial_fragment,
    lens_distortion_barrel_fragment,
    lens_chromatic_aberration_fragment,
    lens_anamorphic_flare_fragment,
    lens_bokeh_depth_fragment,
    sensor_noise_denoise_fragment,
    sensor_anti_banding_fragment,
    green_screen_chroma_key_fragment,
    segmentation_mask_composite_fragment,
    vhs_tracking_jitter_fragment,
    vhs_tape_noise_fragment,
    crt_scanline_phosphor_fragment,
    glitch_block_displace_fragment,
    glitch_rgb_split_fragment,
    glitch_interlace_fragment,
    analog_film_grain_fragment,
    film_dust_scratches_fragment,
    film_burn_leak_fragment,
    film_sprocket_holes_fragment,
    dither_bayer_matrix_fragment,
    dither_blue_noise_fragment,
    dither_floyd_steinberg_fragment,
    halftone_cmyk_dots_fragment,
    ascii_art_raster_fragment,
    pixelate_mosaic_fragment,
    hexagonal_pixelate_fragment,
    crosshatch_sketch_fragment,
    edge_detect_sobel_fragment,
    emboss_relief_fragment,
    glow_neon_soft_fragment,
    bloom_threshold_downsample_fragment,
    bloom_upsample_composite_fragment,
    light_leak_gradient_fragment,
    light_rays_godrays_fragment,
    disco_strobe_pulse_fragment,
    sparkle_starburst_fragment,
    rainbow_prism_caustics_fragment,
    shadow_drop_gaussian_fragment,
    shadow_inner_soft_fragment,
    stroke_outline_expand_fragment,
    particles_bokeh_quads_fragment,
    particles_confetti_mesh_fragment,
    particles_fireworks_fragment,
    particles_snow_dust_fragment,
    transition_crossfade_fragment,
    transition_whip_pan_fragment,
    transition_zoom_in_out_fragment,
    transition_iris_circle_fragment,
    transition_glitch_tearing_fragment,
    transition_linear_wipe_fragment,
    transition_radial_clock_wipe_fragment,
    transition_page_curl_fragment,
    transition_water_ripple_fragment,
    transition_cube_3d_turn_fragment,
    transition_directional_warp_fragment,
    transition_burn_dissolve_fragment,
    transition_pixelize_crumble_fragment,
    transition_cross_zoom_blur_fragment,
    transition_kaleidoscope_fragment,
    transition_film_strip_roll_fragment,
    transition_swirl_twirl_fragment,
    transition_grid_tiles_flip_fragment,
    transition_flash_whiteout_fragment,
    transition_heart_wipe_fragment,
    blend_modes_complete_fragment,
    mask_alpha_matte_fragment,
    mask_luma_matte_fragment,
    mask_invert_matte_fragment,
    transform_2d_affine_vertex,
    transform_perspective_corner_pin_vertex,
    transform_curvature_cylinder_vertex,
    crop_rounded_corners_fragment,
    crop_circle_avatar_fragment,
    mirror_reflection_water_fragment,
    mirror_kaleidoscope_repeat_fragment,
    uv_tile_repeat_fragment,
    uv_stretch_aspect_fit_fragment,
    uv_fisheye_bulge_fragment,
    uv_twirl_vortex_fragment,
    text_msdf_renderer_fragment,
    text_sdf_outline_fragment,
    text_sdf_glow_fragment,
    text_gradient_fill_fragment,
    text_wave_deform_vertex,
    text_karaoke_sweep_fragment,
    text_typewriter_reveal_fragment,
    text_glitch_jitter_fragment,
    text_3d_extrusion_fragment,
    text_sticker_backdrop_fragment,
    common,
    uv_pars_vertex,
    uv_pars_fragment,
    color_pars_fragment,
    default_vertex,
    default_fragment,
    packing,
    fog_linear_fragment,
    blur_gaussian_fragment,
    color_adjust_fragment,
};

export default ShaderChunk;
