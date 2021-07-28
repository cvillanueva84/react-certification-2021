const FORMAT_DATA_DEFAULT_OPTIONS = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

function formatDate(date, options = FORMAT_DATA_DEFAULT_OPTIONS) {
  return new Date(date).toLocaleDateString('mx-ES', options);
}

export { formatDate };
