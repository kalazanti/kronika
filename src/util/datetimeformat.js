const dateTimeFormatter = new Intl.DateTimeFormat("hu-HU", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
});

export const formatDateTime = date => dateTimeFormatter.format(new Date(date));