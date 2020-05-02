var simplemaps_usmap_mapdata = {
    main_settings: {
        //General settings
        width: "responsive", //or 'responsive'
        background_color: "#FFFFFF",
        background_transparent: "yes",
        border_color: "#ffffff",
        popups: "detect",

        //State defaults
        state_description: "State description",
        state_color: "#88A4BC",
        state_hover_color: "#B9DBF8",
        state_url: "http://politicalbuddies.org",
        border_size: 1.5,
        all_states_inactive: "no",
        all_states_zoomable: "no",

        //Location defaults
        location_description: "Location description",
        location_color: "#FF0067",
        location_opacity: 0.8,
        location_hover_opacity: 1,
        location_url: "",
        location_size: 25,
        location_type: "square",
        location_border_color: "#FFFFFF",
        location_border: 2,
        location_hover_border: 2.5,
        all_locations_inactive: "no",
        all_locations_hidden: "no",

        //Label defaults
        label_color: "#000000",
        label_hover_color: "#FFFFFF",
        label_size: 8,
        label_font: "Arial",
        hide_labels: "no",

        //Zoom settings
        manual_zoom: "no",
        back_image: "no",
        arrow_color: "#cecece",
        arrow_color_border: "#808080",
        initial_back: "no",
        initial_zoom: -1,
        initial_zoom_solo: "no",
        region_opacity: 1,
        region_hover_opacity: 0.6,
        zoom_out_incrementally: "yes",
        zoom_percentage: 0.99,
        zoom_time: 0.5,

        //Popup settings
        popup_color: "white",
        popup_opacity: 0.9,
        popup_shadow: 1,
        popup_corners: 5,
        popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
        popup_nocss: "no",

        //Advanced settings
        div: "map",
        auto_load: "yes",
        rotate: "0",
        url_new_tab: "no",
        images_directory: "default",
        fade_time: 0.1,
        link_text: "View Website"
    },
    state_specific: {
        HI: {
            name: "Hawaii",
            description: "default",
            color: "#15b710",
            hover_color: "default",
            url: "default"
        },
        AK: {
            name: "Alaska",
            description: "default",
            color: "#1D88EA",
            hover_color: "default",
            url: "default"
        },
        FL: {
            name: "Florida",
            description: "default",
            color: "#D10F15",
            hover_color: "default",
            url: "default",
            inactive: "no"
        },
        NH: {
            name: "New Hampshire",
            description: "default",
            color: "#D1C86F",
            hover_color: "default",
            url: "default"
        },
        VT: {
            name: "Vermont",
            description: "default",
            color: "#5C0174",
            hover_color: "default",
            url: "default"
        },
        ME: {
            name: "Maine",
            description: "default",
            color: "#623CFA",
            hover_color: "default",
            url: "default"
        },
        RI: {
            name: "Rhode Island",
            description: "default",
            color: "#979CC8",
            hover_color: "default",
            url: "default"
        },
        NY: {
            name: "New York",
            description: "default",
            color: "#C7E870",
            hover_color: "default",
            url: "default"
        },
        PA: {
            name: "Pennsylvania",
            description: "default",
            color: "#4AD84D",
            hover_color: "default",
            url: "default"
        },
        NJ: {
            name: "New Jersey",
            description: "default",
            color: "#680813",
            hover_color: "default",
            url: "default"
        },
        DE: {
            name: "Delaware",
            description: "default",
            color: "#43F106",
            hover_color: "default",
            url: "default"
        },
        MD: {
            name: "Maryland",
            description: "default",
            color: "#E38138",
            hover_color: "default",
            url: "default"
        },
        VA: {
            name: "Virginia",
            description: "default",
            color: "#443E2F",
            hover_color: "default",
            url: "default"
        },
        WV: {
            name: "West Virginia",
            description: "default",
            color: "#9CF5B6",
            hover_color: "default",
            url: "default"
        },
        OH: {
            name: "Ohio",
            description: "default",
            color: "#B88445",
            hover_color: "default",
            url: "default"
        },
        IN: {
            name: "Indiana",
            description: "default",
            color: "#873BB8",
            hover_color: "default",
            url: "default"
        },
        IL: {
            name: "Illinois",
            description: "default",
            color: "#83704B",
            hover_color: "default",
            url: "default"
        },
        CT: {
            name: "Connecticut",
            description: "default",
            color: "#A2221A",
            hover_color: "default",
            url: "default"
        },
        WI: {
            name: "Wisconsin",
            description: "default",
            color: "#AC9178",
            hover_color: "default",
            url: "default"
        },
        NC: {
            name: "North Carolina",
            description: "default",
            color: "#31C467",
            hover_color: "default",
            url: "default"
        },
        DC: {
            name: "District of Columbia",
            description: "default",
            color: "#9E0508",
            hover_color: "default",
            url: "default"
        },
        MA: {
            name: "Massachusetts",
            description: "default",
            color: "#F08C06",
            hover_color: "default",
            url: "default"
        },
        TN: {
            name: "Tennessee",
            description: "default",
            color: "#E2E417",
            hover_color: "default",
            url: "default"
        },
        AR: {
            name: "Arkansas",
            description: "default",
            color: "#790AFE",
            hover_color: "default",
            url: "default"
        },
        MO: {
            name: "Missouri",
            description: "default",
            color: "#E8BE3F",
            hover_color: "default",
            url: "default"
        },
        GA: {
            name: "Georgia",
            description: "default",
            color: "#ED6F57",
            hover_color: "default",
            url: "default"
        },
        SC: {
            name: "South Carolina",
            description: "default",
            color: "#D25C0F",
            hover_color: "default",
            url: "default"
        },
        KY: {
            name: "Kentucky",
            description: "default",
            color: "#982388",
            zoomable: "no",
            hover_color: "default",
            url: "default"
        },
        AL: {
            name: "Alabama",
            description: "default",
            color: "#986A7F",
            hover_color: "default",
            url: "default"
        },
        LA: {
            name: "Louisiana",
            description: "default",
            color: "#9F689B",
            hover_color: "default",
            url: "default"
        },
        MS: {
            name: "Mississippi",
            description: "default",
            color: "#FE480F",
            hover_color: "default",
            url: "default"
        },
        IA: {
            name: "Iowa",
            description: "default",
            color: "#890948",
            hover_color: "default",
            url: "default"
        },
        MN: {
            name: "Minnesota",
            description: "default",
            color: "#904F7B",
            hover_color: "default",
            url: "default"
        },
        OK: {
            name: "Oklahoma",
            description: "default",
            color: "#624590",
            hover_color: "default",
            url: "default"
        },
        TX: {
            name: "Texas",
            description: "default",
            color: "#C44568",
            hover_color: "default",
            url: "default"
        },
        NM: {
            name: "New Mexico",
            description: "default",
            color: "#6AA125",
            hover_color: "default",
            url: "default"
        },
        KS: {
            name: "Kansas",
            description: "default",
            color: "#C6E57A",
            hover_color: "default",
            url: "default"
        },
        NE: {
            name: "Nebraska",
            description: "default",
            color: "#E9C79D",
            hover_color: "default",
            url: "default"
        },
        SD: {
            name: "South Dakota",
            description: "default",
            color: "#3E7ECE",
            hover_color: "default",
            url: "default"
        },
        ND: {
            name: "North Dakota",
            description: "default",
            color: "#E1BA24",
            hover_color: "default",
            url: "default"
        },
        WY: {
            name: "Wyoming",
            description: "default",
            color: "#79C972",
            hover_color: "default",
            url: "default"
        },
        MT: {
            name: "Montana",
            description: "default",
            color: "#72C5AC",
            hover_color: "default",
            url: "default"
        },
        CO: {
            name: "Colorado",
            description: "default",
            color: "#3A834A",
            hover_color: "default",
            url: "default"
        },
        UT: {
            name: "Utah",
            description: "default",
            color: "#D25F13",
            hover_color: "default",
            url: "default"
        },
        AZ: {
            name: "Arizona",
            description: "default",
            color: "#96AF31",
            hover_color: "default",
            url: "default"
        },
        NV: {
            name: "Nevada",
            description: "default",
            color: "#2FEAAB",
            hover_color: "default",
            url: "default"
        },
        OR: {
            name: "Oregon",
            description: "default",
            color: "#32546D",
            hover_color: "default",
            url: "default"
        },
        WA: {
            name: "Washington",
            description: "default",
            color: "#B19B6A",
            hover_color: "default",
            url: "default"
        },
        CA: {
            name: "California",
            description: "default",
            color: "#FFAA73",
            hover_color: "default",
            url: "default"
        },
        MI: {
            name: "Michigan",
            description: "default",
            color: "#CED464",
            hover_color: "default",
            url: "default"
        },
        ID: {
            name: "Idaho",
            description: "default",
            color: "#79066F",
            hover_color: "default",
            url: "default"
        },
        GU: {
            name: "Guam",
            description: "default",
            color: "#B3BD24",
            hover_color: "default",
            url: "default",
            hide: "yes"
        },
        VI: {
            name: "Virgin Islands",
            description: "default",
            color: "#B8815F",
            hover_color: "default",
            url: "default",
            hide: "yes"
        },
        PR: {
            name: "Puerto Rico",
            description: "default",
            color: "#E3B0DF",
            hover_color: "default",
            url: "default",
            hide: "yes"
        },
        AS: {
            name: "American Samoa",
            description: "default",
            color: "#125CCA",
            hover_color: "default",
            url: "default",
            hide: "yes"
        },
        MP: {
            name: "Northern Mariana Islands",
            description: "default",
            color: "#BAB4AE",
            hover_color: "default",
            url: "default",
            hide: "yes"
        }
    },
    //locations: {
    //  "0": {
    //    name: "New York",
    //    lat: 40.71,
    //    lng: -74,
    //    description: "default",
    //    color: "red",
    //    url: "default",
    //    type: "default",
    //    size: "default"
    //  },
    //  "1": {
    //    name: "Anchorage",
    //    lat: 61.2180556,
    //    lng: -149.9002778,
    //    color: "default",
    //    type: "circle"
    //  }
    //},
    labels: {
        HI: {
            color: "default",
            hover_color: "default",
            font_family: "default",
            pill: "yes",
            width: "default"
        }
    }
};